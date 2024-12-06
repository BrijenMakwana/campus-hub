import { Link } from 'expo-router';
import { Image, View, Text, TouchableOpacity } from 'react-native';

import { BookCondition, IBook } from '~/types';

interface IBookItem extends IBook {
  price?: number;
  book_condition?: BookCondition;
  remarks?: string;
}

const BookItem = (props: IBookItem) => {
  const { id, volumeInfo, price, book_condition, remarks } = props;

  const { imageLinks, title, authors, pageCount } = volumeInfo;

  return (
    <Link href={`/book/${id}`} asChild>
      <TouchableOpacity className="flex flex-row justify-between gap-5">
        <Image
          source={{
            uri: imageLinks?.thumbnail || 'https://via.placeholder.com/300x400',
          }}
          className="aspect-[3/4] w-32 rounded-md"
        />

        <View className="flex-1 gap-1">
          <Text className="text-lg font-semibold">{title}</Text>

          <Text className="text-sm font-medium capitalize text-accent">{authors?.join(', ')}</Text>

          <Text className="text-sm">{pageCount} pages</Text>

          {price && <Text className="text-lg font-semibold text-primary">${price}</Text>}
        </View>

        {book_condition && (
          <View className="absolute bottom-5 left-0 rounded-r-full bg-accent py-1 pl-3 pr-5">
            <Text className="font-medium capitalize">{book_condition}</Text>
          </View>
        )}
      </TouchableOpacity>
    </Link>
  );
};

export default BookItem;
