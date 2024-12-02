import { Link } from 'expo-router';
import { Image, Pressable, View, Text } from 'react-native';

import { IBook } from '~/types';

const BookItem = (props: IBook) => {
  const { id, volumeInfo } = props;

  const { imageLinks, title, authors, pageCount } = volumeInfo;

  return (
    <Link href={`/book/${id}`} asChild>
      <Pressable className="flex flex-row justify-between gap-5 rounded-xl border-2 p-3">
        <Image
          source={{
            uri:
              imageLinks?.thumbnail ||
              'https://images.unsplash.com/photo-1510172951991-856a654063f9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          className="aspect-[3/4] w-32 rounded-lg"
        />

        <View className="flex-1 gap-1">
          <Text className="text-xl font-semibold capitalize">{title}</Text>

          <Text className="text-sm capitalize">{authors.join(', ')}</Text>

          <Text className="text-sm capitalize">{pageCount} pages</Text>
        </View>
      </Pressable>
    </Link>
  );
};

export default BookItem;
