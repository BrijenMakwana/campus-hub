import { TextInput, View, TouchableOpacity } from 'react-native';

import BarcodeScanner from './BarcodeScanner';

import { Clear } from '~/lib/icons/Clear';
import { Scan } from '~/lib/icons/Scan';
import { Search } from '~/lib/icons/Search';

interface ISearchBar {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  onSearch: () => void;
}

const SearchBar = (props: ISearchBar) => {
  const { value, setValue, onSearch } = props;

  return (
    <View className="mx-5 flex flex-row justify-between gap-3">
      <View className="flex flex-1 flex-row items-center justify-between gap-3 rounded-md border border-input px-3 py-2">
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

      {!value && (
        <BarcodeScanner setValue={setValue}>
          <Scan className="text-foreground" size={23} strokeWidth={1.25} />
        </BarcodeScanner>
      )}
    </View>
  );
};

export default SearchBar;
