import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import BookItem from '~/components/BookItem';
import BookSaleForm from '~/components/BookSaleForm';
import Error from '~/components/Error';
import GoBack from '~/components/GoBack';
import Loader from '~/components/Loader';
import { Label } from '~/components/ui/label';
import { Separator } from '~/components/ui/separator';
import { useBook, useListBookForSale } from '~/hooks';

const SellBookScreen = () => {
  const { bookId } = useLocalSearchParams();

  const { data: book, isPending, error, refetch } = useBook(bookId);

  const { mutate: listBookForSale, isPending: isMutating } = useListBookForSale();

  if (isPending) return <Loader varient="loading" />;

  if (error) return <Error refetch={refetch} />;

  return (
    <SafeAreaView className="flex-1 gap-2 bg-background p-5">
      <GoBack color="text-secondary" text="Back" />

      <Label>Book you are selling</Label>

      <BookItem {...book} />

      <Separator className="mt-2" />

      <BookSaleForm bookId={bookId as string} isPending={isMutating} onSubmit={listBookForSale} />
    </SafeAreaView>
  );
};

export default SellBookScreen;
