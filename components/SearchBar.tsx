import { TextInput, View, TouchableOpacity } from 'react-native';

import { Clear } from '~/lib/icons/Clear';
import { Search } from '~/lib/icons/Search';

interface ISearchBar {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  onSearch: () => void;
}

const SearchBar = (props: ISearchBar) => {
  const { value, setValue, onSearch } = props;

  return (
    <View className="mx-5 flex flex-row items-center justify-between gap-3 rounded-md border border-input px-3 py-2">
      <Search className="text-foreground" size={23} strokeWidth={1.25} />

      <TextInput
        placeholder="Search books here..."
        className="flex-1 text-foreground"
        value={value}
        onChangeText={setValue}
        onSubmitEditing={onSearch}
        autoFocus
      />

      {value && (
        <TouchableOpacity onPress={() => setValue('')}>
          <Clear className="text-foreground" size={23} strokeWidth={1.25} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchBar;
