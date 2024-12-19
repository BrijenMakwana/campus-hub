import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Link } from 'expo-router';
import { Image, TouchableOpacity, View } from 'react-native';

import ConnectCall from './ConnectCall';
import { Badge } from './ui/badge';
import { Skeleton } from './ui/skeleton';
import { Text } from './ui/text';
import StudentIcon from '../assets/student.svg';
import { Separator } from './ui/separator';

import { useBook, useCurrentUser } from '~/hooks';
import { cn } from '~/lib/utils';
import useCurrencyStore from '~/store';
import { BookCondition, IBookSaleWithUser } from '~/types';

const BookItemWithUser = (props: IBookSaleWithUser) => {
  const { book_id, book_condition, price, created_at, users, user_id } = props;

  const { full_name, phone } = users;

  const { data: book, isPending, error } = useBook(book_id);

  const { data: currentUser } = useCurrentUser();

  const { currency, getExchangeRate } = useCurrencyStore();

  if (isPending) return <Skeleton className="h-48 w-80 bg-neutral-300" />;

  if (error) return;

  dayjs.extend(relativeTime);

  return (
    <View className="gap-5 rounded-2xl bg-secondary/20 p-5">
      <View className="flex flex-row gap-5">
        <Link href={`/book/${book_id}`} asChild>
          <TouchableOpacity>
            <Image
              source={{
                uri:
                  book?.volumeInfo.imageLinks.thumbnail ||
                  'https://images.unsplash.com/photo-1510172951991-856a654063f9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              }}
              className="aspect-[3/4] w-24 rounded-md"
            />
          </TouchableOpacity>
        </Link>

        <View className="w-48 flex-1 gap-1">
          <Text className="font-semibold" numberOfLines={2}>
            {book?.volumeInfo.title}
          </Text>

          <Text className="text-sm font-medium capitalize text-gray-500" numberOfLines={2}>
            {book?.volumeInfo.authors?.join(', ')}
          </Text>

          <View className="mt-2 flex flex-row items-center justify-start gap-3">
            {book_condition && (
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

            {price && (
              <Text className="self-start text-lg font-medium text-primary">
                {currency.symbol}
                {getExchangeRate(price)}
              </Text>
            )}
          </View>
        </View>
      </View>

      <Separator />

      <View className="flex flex-row items-center justify-between">
        <View className="gap-2">
          <Link href={`/book-seller/${user_id}`} asChild>
            <TouchableOpacity className="flex flex-row items-center gap-2">
              <StudentIcon height={20} width={20} />
              <Text numberOfLines={1}>{full_name}</Text>
            </TouchableOpacity>
          </Link>
          <Text className="text-sm text-neutral-500">Added {dayjs(created_at).fromNow()}</Text>
        </View>
        {currentUser?.id !== user_id ? (
          <ConnectCall phone={phone} />
        ) : (
          <Text className="font-medium text-secondary">Your Listing</Text>
        )}
      </View>
    </View>
  );
};

export default BookItemWithUser;
