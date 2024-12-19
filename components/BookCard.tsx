import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Link } from 'expo-router';
import { Image, TouchableOpacity, View } from 'react-native';

import { Badge } from './ui/badge';
import { Skeleton } from './ui/skeleton';
import { Text } from './ui/text';

import { useBook } from '~/hooks';
import { cn } from '~/lib/utils';
import useCurrencyStore from '~/store';
import { IBookSale, BookCondition } from '~/types';

interface IBookCard extends IBookSale {
  isPrice: boolean;
  isBookCondition: boolean;
  isCreatedAt: boolean;
}

const BookCard = (props: IBookCard) => {
  const { book_id, price, book_condition, created_at, isPrice, isCreatedAt, isBookCondition } =
    props;

  const { data: book, isPending, error } = useBook(book_id);

  const { currency, getExchangeRate } = useCurrencyStore();

  if (isPending) return <Skeleton className="h-80 w-48 bg-neutral-300" />;

  if (error) return;

  const { imageLinks, title, authors } = book!.volumeInfo;

  dayjs.extend(relativeTime);

  return (
    <Link href={`/book/${book_id}`} asChild>
      <TouchableOpacity className="h-60 w-48 rounded-2xl bg-accent/20 p-7">
        <Image
          source={{
            uri:
              imageLinks?.thumbnail ||
              'https://images.unsplash.com/photo-1510172951991-856a654063f9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          className="absolute -top-16 aspect-[3/4] w-32 self-center rounded-xl"
        />

        <View className="mt-24 gap-1">
          <Text className="font-semibold" numberOfLines={2}>
            {title}
          </Text>
          <Text className="text-sm font-medium text-gray-500" numberOfLines={1}>
            {authors?.join(', ')}
          </Text>
        </View>

        <View className="mt-1">
          {isPrice && (
            <Text className="text-lg font-medium text-primary">
              {currency.symbol}
              {getExchangeRate(price)}
            </Text>
          )}

          {isBookCondition && (
            <Badge variant="outline" className="self-start">
              <Text
                className={cn(
                  'text-sm font-medium',
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

          {isCreatedAt && (
            <Text className="text-xs text-neutral-500">Added {dayjs(created_at).fromNow()}</Text>
          )}
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default BookCard;
