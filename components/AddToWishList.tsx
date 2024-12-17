import { TouchableOpacity } from 'react-native';

import { useAddBookToWishlist, useIsBookInWishlist } from '~/hooks';
import { Bookmark } from '~/lib/icons/Bookmark';
import { BookmarkCheck } from '~/lib/icons/BookmarkCheck';

const AddToWishList = ({ bookId }: { bookId: string }) => {
  const { mutate: addBookToWishlist, isSuccess } = useAddBookToWishlist();

  const { data: isInWishlist } = useIsBookInWishlist(bookId);

  const shouldShowCheckIcon = isInWishlist || isSuccess;

  return (
    <TouchableOpacity
      className="items-center justify-center p-3"
      onPress={() => addBookToWishlist({ bookId })}
      disabled={shouldShowCheckIcon}>
      {shouldShowCheckIcon ? (
        <BookmarkCheck className="text-background" size={27} strokeWidth={1.5} />
      ) : (
        <Bookmark className="text-background" size={27} strokeWidth={1.5} />
      )}
    </TouchableOpacity>
  );
};

export default AddToWishList;
