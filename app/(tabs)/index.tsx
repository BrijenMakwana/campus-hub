import { useMemo, useState } from 'react';
import { ScrollView, View, FlatList } from 'react-native';
import Animated, { LinearTransition } from 'react-native-reanimated';

import BookCard from '~/components/BookCard';
import BookItemWithUser from '~/components/BookItemWithUser';
import EmptyData from '~/components/EmptyData';
import Error from '~/components/Error';
import Header from '~/components/Header';
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
          .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
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

  if (!books)
    return (
      <View className="flex-1 bg-background">
        <Header />
        <EmptyData text="Your institute has just joined Campus Hub! Start exploring by searching for books in the Search tab." />
      </View>
    );

  const isCreatedAt = activeTab === 0;
  const isBookCondition = activeTab === 1;
  const isPrice = activeTab === 2;

  return (
    <ScrollView
      className="flex-1 bg-background"
      contentContainerClassName="gap-5 pb-10"
      stickyHeaderIndices={[0]}
      showsVerticalScrollIndicator={false}>
      <Header />

      <Label className="ml-5">Discover Books</Label>
      <View className="flex flex-row gap-5">
        <VerticalTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <Animated.FlatList
          data={sortBooks}
          extraData={activeTab}
          renderItem={({ item }) => (
            <BookCard
              {...item}
              isPrice={isPrice}
              isBookCondition={isBookCondition}
              isCreatedAt={isCreatedAt}
            />
          )}
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
  );
};

export default HomeScreen;
