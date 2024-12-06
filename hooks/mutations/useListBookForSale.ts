import { useMutation, useQueryClient } from '@tanstack/react-query';
import Toast from 'react-native-toast-message';

import { supabase } from '~/supabase';
import { BookCondition } from '~/types';

export const useListBookForSale = () => {
  const queryClient = useQueryClient();

  const listBookForSale = async ({
    bookId,
    bookCondition,
    price,
    remarks,
  }: {
    bookId: string;
    bookCondition: BookCondition;
    price: string;
    remarks?: string;
  }) => {
    const { error } = await supabase
      .from('book_listing')
      .insert([{ book_id: bookId, book_condition: bookCondition, price: Number(price), remarks }])
      .select();

    if (error) throw new Error(error.message);
  };

  return useMutation({
    mutationFn: listBookForSale,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['myListedBooks'] });
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
