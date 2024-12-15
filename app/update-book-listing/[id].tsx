import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import BookSaleForm from '~/components/BookSaleForm';
import Error from '~/components/Error';
import GoBack from '~/components/GoBack';
import Loader from '~/components/Loader';
import SVG2 from '~/components/svgs/SVG2';
import { useBookListingById, useUpdateBookListing } from '~/hooks';
import useCurrencyStore from '~/store';
import { BookCondition } from '~/types';

const UpdateBookListingScreen = () => {
  const { id } = useLocalSearchParams();

  const { data: bookListing, isPending, error, refetch } = useBookListingById(id);

  const { mutate: updateBookListing, isPending: isMutating } = useUpdateBookListing();

  const { getExchangeRate } = useCurrencyStore();

  if (isPending) return <Loader varient="loading" />;

  if (error) return <Error refetch={refetch} />;

  const onSubmit = (data: { bookCondition: BookCondition; price: string; remarks?: string }) => {
    updateBookListing({ id, ...data });
  };

  return (
    <SafeAreaView className="flex-1 gap-2 bg-background p-5">
      <SVG2 />

      <GoBack color="text-secondary" text="Back" />

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
    </SafeAreaView>
  );
};

export default UpdateBookListingScreen;
