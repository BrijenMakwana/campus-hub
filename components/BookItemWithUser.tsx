import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Link } from 'expo-router';
import { TouchableOpacity, Image, View } from 'react-native';

import { Badge } from './ui/badge';
import { Skeleton } from './ui/skeleton';
import { Text } from './ui/text';
import StudentIcon from '../assets/student.svg';

import { useBook } from '~/hooks';
import { cn } from '~/lib/utils';
import useCurrencyStore from '~/store';
import { BookCondition, IBookSaleWithUser } from '~/types';

const BookItemWithUser = (props: IBookSaleWithUser) => {
  const { book_id, book_condition, price, created_at, users, user_id } = props;

  const { full_name } = users;

  const { data: book, isPending } = useBook(book_id);

  const { currency } = useCurrencyStore();

  if (isPending) return <Skeleton className="h-48 w-80 bg-neutral-300" />;

  dayjs.extend(relativeTime);

  return (
    <Link href={`/book-seller/${user_id}`} asChild>
      <TouchableOpacity className="flex flex-row justify-between gap-5 rounded-2xl bg-secondary/15 p-5">
        <Image
          source={{
            uri: book?.volumeInfo.imageLinks.thumbnail || 'https://via.placeholder.com/300x400',
          }}
          className="aspect-[3/4] w-28 rounded-md shadow-md"
        />

        <View className="flex-1 gap-1">
          <Text className="text-lg font-semibold" numberOfLines={2}>
            {book?.volumeInfo.title}
          </Text>

          <Text className="text-sm font-medium capitalize text-gray-500" numberOfLines={2}>
            {book?.volumeInfo.authors.join(', ')}
          </Text>

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
                {price}
              </Text>
            )}
          </View>

          <View className="mt-5 gap-1 self-end">
            <View className="flex flex-row items-center gap-3">
              <StudentIcon height={20} width={20} />
              <Text>{full_name}</Text>
            </View>
            <Text className="text-right text-sm">Added {dayjs(created_at).fromNow()}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default BookItemWithUser;
