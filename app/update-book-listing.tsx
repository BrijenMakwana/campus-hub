import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import AIView from '~/components/AIView';
import BookItem from '~/components/BookItem';
import BookSaleForm from '~/components/BookSaleForm';
import Error from '~/components/Error';
import GoBack from '~/components/GoBack';
import Loader from '~/components/Loader';
import SVG5 from '~/components/svgs/SVG5';
import { Label } from '~/components/ui/label';
import { Separator } from '~/components/ui/separator';
import { useBook, useBookListingById, useUpdateBookListing } from '~/hooks';
import useCurrencyStore from '~/store';
import { BookCondition } from '~/types';

const UpdateBookListingScreen = () => {
  const { id, bookId } = useLocalSearchParams();

  const { data: bookListing, isPending, error, refetch } = useBookListingById(id);

  const { data: book } = useBook(bookId);

  const { mutate: updateBookListing, isPending: isMutating } = useUpdateBookListing();

  const { getExchangeRate, currency } = useCurrencyStore();

  if (isPending) return <Loader varient="loading" />;

  if (error) return <Error refetch={refetch} />;

  const onSubmit = (data: { bookCondition: BookCondition; price: string; remarks?: string }) => {
    updateBookListing({ id, ...data });
  };

  return (
    <SafeAreaView className="flex-1 gap-2 bg-background p-5">
      <SVG5 />

      <GoBack color="text-secondary" text="Back" />

      <Label>Book you are Editing</Label>

      {book && <BookItem {...book} />}

      <Separator className="mt-2" />

      <BookSaleForm
        isPending={isMutating}
        onSubmit={onSubmit}
        defaultValues={{
          bookCondition: bookListing.book_condition,
          price: getExchangeRate(bookListing.price).toString(),
          remarks: bookListing?.remarks ?? '',
        }}
        buttonText="Update Book Listing"
      />

      {!isMutating && (
        <AIView
          text="Unsure What to Charge? Ask AI!"
          prompt={`Suggest a fair price for a second-hand book titled ${book?.volumeInfo.title} by ${book?.volumeInfo.authors.join(', ')}. The book is located in ${currency.country}, and the price should be in ${currency.currency}. Consider typical second-hand book pricing in this region and factor in the book’s used condition.Provide a one-line response with just the price suggestion.`}
          className="bottom-24"
        />
      )}
    </SafeAreaView>
  );
};

export default UpdateBookListingScreen;
