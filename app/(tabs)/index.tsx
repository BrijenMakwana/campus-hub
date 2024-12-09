import { useMemo, useState } from 'react';
import { View } from 'react-native';
import Animated, { LinearTransition } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

import BookCard from '~/components/BookCard';
import Error from '~/components/Error';
import Loading from '~/components/Loading';
import VerticalTabs from '~/components/VerticalTabs';
import { useBookListings } from '~/hooks';
import { BookCondition } from '~/types';

const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState(0);

  const { data: books, isPending, error, refetch } = useBookListings();

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
      <View className="mt-10 flex flex-row gap-5">
        <VerticalTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <Animated.FlatList
          data={sortBooks}
          extraData={activeTab}
          renderItem={({ item }) => <BookCard {...item} />}
          keyExtractor={(item) => item.id.toString()}
          contentContainerClassName="gap-7 pr-7"
          itemLayoutAnimation={LinearTransition}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
