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
          <WishListTab />
        </TabsContent>
        <TabsContent value="for sale">
          <ForSaleTab />
        </TabsContent>
      </Tabs>
    </SafeAreaView>
  );
};

export default BookListingScreen;

const WishListTab = () => {
  const { data, isPending, error } = useWishListedBooks();

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

const ForSaleTab = () => {
  const { data, isPending, error } = useMyListedBooks();

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
