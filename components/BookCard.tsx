import { Link } from 'expo-router';
import { Image, TouchableOpacity, View } from 'react-native';

import { Skeleton } from './ui/skeleton';
import { Text } from './ui/text';

import { useBook } from '~/hooks';
import { IBookSale } from '~/types';

const BookCard = (props: IBookSale) => {
  const { book_id } = props;

  const { data: book, isPending } = useBook(book_id);

  if (isPending) return <Skeleton className="h-80 w-48 bg-neutral-300" />;

  const { imageLinks, title, authors } = book!.volumeInfo;

  return (
    <Link href={`/book/${book_id}`} asChild>
      <TouchableOpacity className="w-48 gap-5">
        <Image
          source={{
            uri: imageLinks?.thumbnail || 'https://via.placeholder.com/300x400',
          }}
          className="aspect-[3/4] w-48 rounded-md shadow-md"
        />

        <View className="gap-2">
          <Text className="text-xl font-semibold">{title}</Text>
          <Text className="text-gray-500">{authors.join(', ')}</Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default BookCard;
