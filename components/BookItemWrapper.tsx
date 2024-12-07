import BookItem from './BookItem';

import { Skeleton } from '~/components/ui/skeleton';
import { useBook } from '~/hooks';
import { IBookSale, IWishlistBook } from '~/types';

const BookItemWrapper = (props: IWishlistBook | IBookSale) => {
  const { book_id, ...rest } = props;

  const { data: book, isPending, error } = useBook(book_id);

  if (isPending) return <Skeleton className="h-40 w-full bg-neutral-300" />;

  if (error) return;

  return <BookItem {...book} {...rest} id={book_id} />;
};

export default BookItemWrapper;
