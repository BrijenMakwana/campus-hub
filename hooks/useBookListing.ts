import { useQuery } from '@tanstack/react-query';

import { supabase } from '~/supabase';
import { IBookSaleWithUser } from '~/types';

export const useBookListing = (bookId: string) => {
  const getBookListings = async (): Promise<IBookSaleWithUser[]> => {
    const { data } = await supabase
      .from('book_listing')
      .select(
        `
          *,
          users (
            full_name,
            phone
          )
        `
      )
      .eq('book_id', bookId);

    return (data ?? []) as IBookSaleWithUser[];
  };

  return useQuery({
    queryKey: [`bookListings ${bookId}`],
    queryFn: getBookListings,
    enabled: !!bookId,
  });
};
