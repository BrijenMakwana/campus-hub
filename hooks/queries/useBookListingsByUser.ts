import { useQuery } from '@tanstack/react-query';

import { supabase } from '~/supabase';
import { IBookSale } from '~/types';

export const useBookListingsByUser = (userId: string) => {
  const getBookListingsByUser = async (): Promise<IBookSale[]> => {
    const { data } = await supabase.from('book_listing').select('*').eq('user_id', userId);

    return (data ?? []) as IBookSale[];
  };

  return useQuery({
    queryKey: ['bookListingsByUser', userId],
    queryFn: getBookListingsByUser,
  });
};
