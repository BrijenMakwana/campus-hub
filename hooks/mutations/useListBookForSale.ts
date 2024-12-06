import { useMutation } from '@tanstack/react-query';

import { supabase } from '~/supabase';
import { BookCondition } from '~/types';

export const useListBookForSale = () => {
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
    const { data, error } = await supabase
      .from('book_listing')
      .insert([{ book_id: bookId, book_condition: bookCondition, price: Number(price), remarks }])
      .select();

    if (error) throw new Error(error.message);
  };

  return useMutation({
    mutationFn: listBookForSale,
    onSuccess: () => {
      console.log('added');
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
