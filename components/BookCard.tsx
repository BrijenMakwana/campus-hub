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
      <TouchableOpacity className="h-64 w-48 rounded-2xl bg-accent/30 p-7">
        <Image
          source={{
            uri: imageLinks?.thumbnail || 'https://via.placeholder.com/300x400',
          }}
          className="absolute -top-16 aspect-[3/4] w-36 self-center rounded-xl shadow-md"
        />

        <View className="mt-28 gap-2">
          <Text className="text-lg font-semibold" numberOfLines={2}>
            {title}
          </Text>
          <Text className="text-sm text-gray-500" numberOfLines={2}>
            {authors.join(', ')}
          </Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default BookCard;
