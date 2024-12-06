import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Link } from 'expo-router';
import { Image, View, Text, TouchableOpacity } from 'react-native';

import { BookCondition, IBook } from '~/types';

interface IBookItem extends IBook {
  price?: number;
  book_condition?: BookCondition;
  remarks?: string;
  created_at?: Date;
}

const BookItem = (props: IBookItem) => {
  const { id, volumeInfo, price, book_condition, remarks, created_at } = props;

  const { imageLinks, title, authors, pageCount } = volumeInfo;

  dayjs.extend(relativeTime);

  return (
    <Link href={`/book/${id}`} asChild>
      <TouchableOpacity className="flex flex-row items-start justify-between gap-5">
        <View>
          <Image
            source={{
              uri: imageLinks?.thumbnail || 'https://via.placeholder.com/300x400',
            }}
            className="aspect-[3/4] w-32 rounded-md"
          />

          {book_condition && (
            <View className="absolute bottom-0 w-full items-center rounded-b-md bg-accent/75 py-1 ">
              <Text className="font-medium capitalize">{book_condition}</Text>
            </View>
          )}
        </View>

        <View className="flex-1 gap-1">
          <Text className="text-lg font-semibold">{title}</Text>

          <Text className="text-sm font-medium capitalize text-accent">{authors?.join(', ')}</Text>

          <Text className="text-sm">{pageCount} pages</Text>

          {price && <Text className="text-lg font-semibold text-primary">${price}</Text>}

          {remarks && <Text className="text-gray-500">{remarks}</Text>}

          {created_at && (
            <Text className="mt-auto text-right  text-sm">Added {dayjs(created_at).fromNow()}</Text>
          )}
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default BookItem;
