import { useQuery } from '@tanstack/react-query';

import { supabase } from '~/supabase';
import { IBookSale } from '~/types';

export const useBookListings = () => {
  const getBookListings = async (): Promise<IBookSale[]> => {
    const { data } = await supabase.from('book_listing').select('*');

    return (data ?? []) as IBookSale[];
  };

  return useQuery({
    queryKey: ['bookListings'],
    queryFn: getBookListings,
  });
};
