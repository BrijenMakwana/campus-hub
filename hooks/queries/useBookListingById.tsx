import { useQuery } from '@tanstack/react-query';

import { supabase } from '~/supabase';
import { IBookSale } from '~/types';

export const useBookListingById = (id: string) => {
  const getBookListing = async (): Promise<IBookSale> => {
    const { data } = await supabase.from('book_listing').select('*').eq('id', id).single();

    return data;
  };

  return useQuery({
    queryKey: ['bookListingById', id],
    queryFn: getBookListing,
  });
};
