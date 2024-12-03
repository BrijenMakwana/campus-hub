import BookItem from './BookItem';

import { useBook } from '~/hooks';

interface IWishListBook {
  bookId: string;
}

const WishListBook = (props: IWishListBook) => {
  const { bookId } = props;

  const { data, isPending, error } = useBook(bookId);

  if (isPending) return;

  if (error) return;

  return <BookItem {...data!} />;
};

export default WishListBook;
