import { UseQueryResult, UseMutationResult } from '@tanstack/react-query';
import LottieView from 'lottie-react-native';
import { useState } from 'react';
import { View } from 'react-native';
import Animated, { LinearTransition } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

import BookItemWrapper from '~/components/BookItemWrapper';
import Loading from '~/components/Loading';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';
import { Text } from '~/components/ui/text';
import {
  useMyListedBooks,
  useRemoveBookFromSale,
  useRemoveBookFromWishlist,
  useWishListedBooks,
} from '~/hooks';
import { IBookSale, IWishlistBook } from '~/types';

const BookListingScreen = () => {
  const [value, setValue] = useState('wishlist');

  return (
    <SafeAreaView className="flex-1  bg-background">
      <Tabs value={value} onValueChange={setValue}>
        <TabsList className="mt-5 w-3/4 flex-row self-center">
          <TabsTrigger value="wishlist" className="flex-1">
            <Text>Wishlist</Text>
          </TabsTrigger>
          <TabsTrigger value="for sale" className="flex-1">
            <Text>For Sale</Text>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="wishlist">
          <BooksTab useBooks={useWishListedBooks} useRemoveBook={useRemoveBookFromWishlist} />
        </TabsContent>
        <TabsContent value="for sale">
          <BooksTab useBooks={useMyListedBooks} useRemoveBook={useRemoveBookFromSale} />
        </TabsContent>
      </Tabs>
    </SafeAreaView>
  );
};

export default BookListingScreen;

const BooksTab = ({
  useBooks,
  useRemoveBook,
}: {
  useBooks: () => UseQueryResult<IWishlistBook[] | IBookSale[], Error>;
  useRemoveBook: () => UseMutationResult<
    void,
    Error,
    {
      id: number;
    },
    unknown
  >;
}) => {
  const { data, isPending, error } = useBooks();

  const { mutate: removeBook } = useRemoveBook();

  if (isPending) return <Loading />;

  return (
    <Animated.FlatList
      data={data}
      renderItem={({ item }) => (
        <BookItemWrapper {...item} removeBook={() => removeBook({ id: item.id })} />
      )}
      keyExtractor={(item) => item.id.toString()}
      contentContainerClassName="gap-5 pb-52 px-5 mt-5"
      ListEmptyComponent={Empty}
      itemLayoutAnimation={LinearTransition}
    />
  );
};

const Empty = () => {
  return (
    <View className="items-center justify-center py-32">
      <LottieView
        autoPlay
        loop
        style={{
          width: 250,
          height: 250,
        }}
        source={require('../../assets/booklist.zip')}
        speed={1}
      />

      <Text className="text-center">Seems a bit empty. Let’s fill it with some books!</Text>
    </View>
  );
};
