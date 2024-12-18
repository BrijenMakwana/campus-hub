import { useMutation, useQueryClient } from '@tanstack/react-query';
import { router } from 'expo-router';
import Toast from 'react-native-toast-message';

import useCurrencyStore from '~/store';
import { supabase } from '~/supabase';
import { BookCondition } from '~/types';

export const useUpdateBookListing = () => {
  const queryClient = useQueryClient();

  const { convertToUSD } = useCurrencyStore();

  const updateBookListing = async ({
    id,
    bookCondition,
    price,
    remarks,
  }: {
    id: string;
    bookCondition: BookCondition;
    price: string;
    remarks?: string;
  }) => {
    const { error } = await supabase
      .from('book_listing')
      .update({ book_condition: bookCondition, price: convertToUSD(Number(price)), remarks })
      .eq('id', id)
      .select();

    if (error) throw new Error(error.message);
  };

  return useMutation({
    mutationFn: updateBookListing,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['myListedBooks'] });
      queryClient.invalidateQueries({ queryKey: ['bookListings'] });
      queryClient.invalidateQueries({ queryKey: ['bookListingsWithUsers'] });

      router.back();

      Toast.show({
        type: 'updateToast',
        topOffset: 50,
      });
    },
    onError: (error) => {
      Toast.show({
        type: 'error',
        text1: error.message,
        topOffset: 50,
      });
    },
  });
};
