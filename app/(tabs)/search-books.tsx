import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import SearchBar from '~/components/SearchBar';
import { useSearchBooks } from '~/hooks';

const SearchBooksScreen = () => {
  const [bookTitle, setBookTitle] = useState('');

  const { data, refetch } = useSearchBooks(bookTitle);

  return (
    <SafeAreaView>
      <SearchBar value={bookTitle} setValue={setBookTitle} onSearch={refetch} />
    </SafeAreaView>
  );
};

export default SearchBooksScreen;
