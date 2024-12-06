import { Button } from './ui/button';

import { useAddBookToWishlist } from '~/hooks';
import { Bookmark } from '~/lib/icons/Bookmark';

const AddToWishList = ({ bookId }: { bookId: string }) => {
  const { mutate: addBookToWishlist, isPending } = useAddBookToWishlist();

  return (
    <Button
      className="absolute bottom-7 right-7  items-center justify-center rounded-full bg-primary"
      onPress={() => addBookToWishlist({ bookId })}>
      <Bookmark className="text-foreground" size={23} strokeWidth={1.25} />
    </Button>
  );
};

export default AddToWishList;
