import { Link } from 'expo-router';
import { Image, View, Text, TouchableOpacity } from 'react-native';

import { IBook } from '~/types';

const BookItem = (props: IBook) => {
  const { id, volumeInfo } = props;

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
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default BookItem;
