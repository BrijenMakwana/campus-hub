import BookItem from './BookItem';
import Loading from './Loading';

import { useBook } from '~/hooks';
import { BookCondition } from '~/types';

interface IBookItemWrapper {
  book_id: string;
  price: number;
  book_condition: BookCondition;
  remarks: string;
  created_at: Date;
}

const BookItemWrapper = (props: IBookItemWrapper) => {
  const { book_id, ...rest } = props;

  const { data, isPending, error } = useBook(book_id);

  if (isPending) return <Loading />;

  if (error) return;

  return <BookItem {...data} {...rest} />;
};

export default BookItemWrapper;
