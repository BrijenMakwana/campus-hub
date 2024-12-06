import BookItem from './BookItem';
import Loading from './Loading';

import { useBook } from '~/hooks';

interface IWishListBook {
  bookId: string;
}

const WishListBook = (props: IWishListBook) => {
  const { bookId } = props;

  const { data, isPending, error } = useBook(bookId);

  if (isPending) return <Loading />;

  if (error) return;

  return <BookItem {...data!} />;
};

export default WishListBook;
