import { UseQueryResult } from '@tanstack/react-query';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BookItemWrapper from '~/components/BookItemWrapper';
import Loading from '~/components/Loading';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';
import { Text } from '~/components/ui/text';
import { useMyListedBooks, useWishListedBooks } from '~/hooks';

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
          <BooksTab useBooksHook={useWishListedBooks} />
        </TabsContent>
        <TabsContent value="for sale">
          <BooksTab useBooksHook={useMyListedBooks} />
        </TabsContent>
      </Tabs>
    </SafeAreaView>
  );
};

export default BookListingScreen;

const BooksTab = ({
  useBooksHook,
}: {
  useBooksHook: () => UseQueryResult<any[] | null, Error>;
}) => {
  const { data, isPending, error } = useBooksHook();

  if (isPending) return <Loading />;

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <BookItemWrapper {...item} />}
      keyExtractor={(item) => item.id}
      contentContainerClassName="gap-5 pb-28 px-5 mt-5"
    />
  );
};
