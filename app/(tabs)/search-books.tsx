import { useState } from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BookItem from '~/components/BookItem';
import SearchBar from '~/components/SearchBar';
import { useSearchBooks } from '~/hooks';

const SearchBooksScreen = () => {
  const [bookTitle, setBookTitle] = useState('');

  const { data: books, refetch } = useSearchBooks(bookTitle);

  return (
    <SafeAreaView className="flex-1 gap-5 bg-white pt-5">
      <SearchBar value={bookTitle} setValue={setBookTitle} onSearch={refetch} />

      <FlatList
        data={books}
        renderItem={({ item }) => <BookItem {...item} />}
        keyExtractor={(item) => item.id}
        contentContainerClassName="px-5 gap-5 pb-28"
      />
    </SafeAreaView>
  );
};

export default SearchBooksScreen;
