import BookItem from './BookItem';
import Loading from './Loading';

import { useBook } from '~/hooks';
import { IBookSale, IWishlistBook } from '~/types';

const BookItemWrapper = (props: IWishlistBook | IBookSale) => {
  const { book_id, ...rest } = props;

  const { data: book, isPending, error } = useBook(book_id);

  if (isPending) return <Loading />;

  if (error) return;

  return <BookItem {...book} {...rest} id={book_id} />;
};

export default BookItemWrapper;
