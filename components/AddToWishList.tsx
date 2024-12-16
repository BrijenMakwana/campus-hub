import { TouchableOpacity } from 'react-native';

import { useAddBookToWishlist } from '~/hooks';
import { Bookmark } from '~/lib/icons/Bookmark';

const AddToWishList = ({ bookId }: { bookId: string }) => {
  const { mutate: addBookToWishlist, isPending } = useAddBookToWishlist();

  return (
    <TouchableOpacity
      className="items-center justify-center p-3"
      onPress={() => addBookToWishlist({ bookId })}>
      <Bookmark className="text-background" size={27} strokeWidth={1.5} />
    </TouchableOpacity>
  );
};

export default AddToWishList;
