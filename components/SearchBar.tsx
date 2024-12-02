import AntDesign from '@expo/vector-icons/AntDesign';
import { TextInput, View } from 'react-native';

interface ISearchBar {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  onSearch: () => void;
}

const SearchBar = (props: ISearchBar) => {
  const { value, setValue, onSearch } = props;

  return (
    <View className="mt-5 flex w-11/12 flex-row items-center justify-between gap-5 self-center rounded-full border-2 px-7 py-3">
      <AntDesign name="search1" size={30} color="black" />

      <TextInput
        placeholder="Search your books here..."
        className="flex-1"
        value={value}
        onChangeText={setValue}
        onSubmitEditing={onSearch}
      />
    </View>
  );
};

export default SearchBar;
