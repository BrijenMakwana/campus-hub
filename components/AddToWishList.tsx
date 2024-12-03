import Fontisto from '@expo/vector-icons/Fontisto';
import { TouchableOpacity } from 'react-native';

const AddToWishList = () => {
  return (
    <TouchableOpacity className="absolute bottom-7 right-7 aspect-square w-16 items-center justify-center rounded-full border bg-background">
      <Fontisto name="bookmark" size={30} color="black" />
    </TouchableOpacity>
  );
};

export default AddToWishList;
