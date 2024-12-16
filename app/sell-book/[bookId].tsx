import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import AIView from '~/components/AIView';
import BookItem from '~/components/BookItem';
import BookSaleForm from '~/components/BookSaleForm';
import Error from '~/components/Error';
import GoBack from '~/components/GoBack';
import Loader from '~/components/Loader';
import SVG2 from '~/components/svgs/SVG2';
import { Label } from '~/components/ui/label';
import { Separator } from '~/components/ui/separator';
import { useBook, useListBookForSale } from '~/hooks';
import useCurrencyStore from '~/store';
import { BookCondition } from '~/types';

const SellBookScreen = () => {
  const { bookId } = useLocalSearchParams();

  const { data: book, isPending, error, refetch } = useBook(bookId);

  const { mutate: listBookForSale, isPending: isMutating } = useListBookForSale();

  const { currency } = useCurrencyStore();

  if (isPending) return <Loader varient="loading" />;

  if (error) return <Error refetch={refetch} />;

  const onSubmit = (data: { bookCondition: BookCondition; price: string; remarks?: string }) => {
    listBookForSale({ bookId, ...data });
  };

  return (
    <SafeAreaView className="flex-1 gap-2 bg-background p-5">
      <SVG2 />

      <GoBack color="text-secondary" text="Back" />

      <Label>Book you are Selling</Label>

      <BookItem {...book} />

      <Separator className="mt-2" />

      <AIView
        text="Unsure What to Charge? Ask AI!"
        prompt={`Suggest a fair price for a second-hand book titled ${book.volumeInfo.title} by ${book.volumeInfo.authors.join(', ')}. The book is located in ${currency.country}, and the price should be in ${currency.currency}. Consider typical second-hand book pricing in this region and factor in the book’s used condition.Provide a one-line response with just the price suggestion.`}
        className="bottom-24"
      />

      <BookSaleForm isPending={isMutating} onSubmit={onSubmit} buttonText="List Book for Sale" />
    </SafeAreaView>
  );
};

export default SellBookScreen;
