import LottieView from 'lottie-react-native';
import { useState } from 'react';
import { FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BookItem from '~/components/BookItem';
import Loader from '~/components/Loader';
import SearchBar from '~/components/SearchBar';
import { Text } from '~/components/ui/text';
import { useSearchBooks } from '~/hooks';

const SearchBooksScreen = () => {
  const [bookTitle, setBookTitle] = useState('');

  const { data: books, isFetching, refetch, isSuccess } = useSearchBooks(bookTitle);

  return (
    <SafeAreaView className="flex-1 gap-5 bg-background pt-5">
      <SearchBar value={bookTitle} setValue={setBookTitle} onSearch={refetch} />

      {isFetching && <Loader varient="searching" />}

      <FlatList
        data={books}
        renderItem={({ item }) => <BookItem {...item} />}
        keyExtractor={(item) => item.id}
        contentContainerClassName="px-5 gap-5 pb-28"
        ListEmptyComponent={bookTitle && isSuccess ? Empty : null}
      />
    </SafeAreaView>
  );
};

export default SearchBooksScreen;

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
        source={require('../../assets/empty-box.zip')}
        speed={1}
      />

      <Text className="text-center">The shelves seem empty for now. Try a different search!</Text>
    </View>
  );
};
