import { useMemo, useState } from 'react';
import { ScrollView, View, FlatList } from 'react-native';
import Animated, { LinearTransition } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

import BookCard from '~/components/BookCard';
import BookItemWithUser from '~/components/BookItemWithUser';
import Error from '~/components/Error';
import Loading from '~/components/Loading';
import VerticalTabs from '~/components/VerticalTabs';
import { Label } from '~/components/ui/label';
import { useBookListings, useBookListingsWithUsers } from '~/hooks';
import { BookCondition } from '~/types';

const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState(0);

  const { data: books, isPending, error, refetch } = useBookListings();

  const { data: booksWithUsers } = useBookListingsWithUsers();

  const sortBooks = useMemo(() => {
    switch (activeTab) {
      case 0:
        return books
          ?.slice()
          .sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());
      case 1:
        return books?.filter((book) => book.book_condition === BookCondition.GOOD);
      case 2:
        return books?.slice().sort((a, b) => a.price - b.price);
      default:
        return books;
    }
  }, [activeTab, books]);

  if (isPending) return <Loading />;

  if (error) return <Error refetch={refetch} />;

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView className="flex-1" contentContainerClassName="gap-5">
        <Label className="ml-5">Discover Books</Label>
        <View className="flex flex-row gap-5">
          <VerticalTabs activeTab={activeTab} setActiveTab={setActiveTab} />

          <Animated.FlatList
            data={sortBooks}
            extraData={activeTab}
            renderItem={({ item }) => <BookCard {...item} />}
            keyExtractor={(item) => item.id.toString()}
            contentContainerClassName="gap-7 pr-7 items-end"
            itemLayoutAnimation={LinearTransition}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <Label className="ml-5">Get in Touch for Books</Label>

        <FlatList
          data={booksWithUsers}
          renderItem={({ item }) => <BookItemWithUser {...item} />}
          keyExtractor={(item) => item.id.toString()}
          contentContainerClassName="gap-7 px-7"
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
