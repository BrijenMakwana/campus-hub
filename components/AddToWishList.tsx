import { TouchableOpacity } from 'react-native';

import { useAddBookToWishlist, useIsBookInWishlist } from '~/hooks';
import { Bookmark } from '~/lib/icons/Bookmark';
import { BookmarkCheck } from '~/lib/icons/BookmarkCheck';

const AddToWishList = ({ bookId }: { bookId: string }) => {
  const { mutate: addBookToWishlist } = useAddBookToWishlist();

  const { data: isInWishlist } = useIsBookInWishlist(bookId);

  return (
    <TouchableOpacity
      className="items-center justify-center p-3"
      onPress={() => addBookToWishlist({ bookId })}
      disabled={isInWishlist}>
      {isInWishlist ? (
        <BookmarkCheck className="text-background" size={27} strokeWidth={1.5} />
      ) : (
        <Bookmark className="text-background" size={27} strokeWidth={1.5} />
      )}
    </TouchableOpacity>
  );
};

export default AddToWishList;
