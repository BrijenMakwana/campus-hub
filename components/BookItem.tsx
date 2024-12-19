import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Link } from 'expo-router';
import { Image, View, Text, TouchableOpacity } from 'react-native';

import { Badge } from './ui/badge';
import { Button } from './ui/button';

import { cn, ensureHttps } from '~/lib/utils';
import useCurrencyStore from '~/store';
import { BookCondition, IGoogleBook } from '~/types';

interface IBookItem extends IGoogleBook {
  price?: number;
  book_condition?: BookCondition;
  remarks?: string | null;
  created_at?: Date;
  actionbtns?: boolean;
}

const BookItem = (props: IBookItem) => {
  const { id, volumeInfo, price, book_condition, remarks, created_at, actionbtns = false } = props;

  const { imageLinks, title, authors, pageCount } = volumeInfo;

  const { currency, getExchangeRate } = useCurrencyStore();

  dayjs.extend(relativeTime);

  return (
    <View className="flex flex-row justify-between gap-5">
      <Link href={`/book/${id}`} asChild>
        <TouchableOpacity>
          <Image
            source={{
              uri:
                ensureHttps(imageLinks?.thumbnail) ||
                'https://images.unsplash.com/photo-1510172951991-856a654063f9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            }}
            className="aspect-[3/4] w-32 rounded-md"
            style={{
              width: 100,
              aspectRatio: 3 / 4,
              borderRadius: 5,
            }}
          />
        </TouchableOpacity>
      </Link>

      <View className="flex-1 gap-1">
        <Text className="text-lg font-semibold" numberOfLines={2}>
          {title}
        </Text>

        <Text className="text-sm font-medium capitalize text-gray-500" numberOfLines={1}>
          {authors?.join(', ')}
        </Text>

        <Text className="text-sm">{pageCount} pages</Text>

        {actionbtns && (
          <View className="mt-2 flex flex-row gap-2">
            <Link href={`/book/${id}`} asChild>
              <Button>
                <Text className="text-background">Looking For</Text>
              </Button>
            </Link>

            <Link href={`/sell-book/${id}`} asChild>
              <Button variant="outline">
                <Text>Sell Mine</Text>
              </Button>
            </Link>
          </View>
        )}

        <View className="mt-2 flex flex-row items-center justify-start gap-3">
          {book_condition && (
            <Badge variant="outline" className="self-start">
              <Text
                className={cn(
                  'font-medium',
                  book_condition === BookCondition.GOOD
                    ? 'text-green-400'
                    : book_condition === BookCondition.USED
                      ? 'text-yellow-400'
                      : 'text-red-400'
                )}>
                {book_condition}
              </Text>
            </Badge>
          )}
          {price && (
            <Text className="self-start text-lg font-medium text-primary">
              {currency.symbol}
              {getExchangeRate(price)}
            </Text>
          )}
        </View>

        {remarks && <Text className="mt-1 text-gray-500">{remarks}</Text>}

        {created_at && (
          <Text className="mt-auto text-right text-sm">Added {dayjs(created_at).fromNow()}</Text>
        )}
      </View>
    </View>
  );
};

export default BookItem;
