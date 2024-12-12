import { useQuery } from '@tanstack/react-query';

import { supabase } from '~/supabase';
import { IBookSaleWithUser } from '~/types';

export const useBookListingsWithUsers = () => {
  const getBookListingsWithUsers = async (): Promise<IBookSaleWithUser[]> => {
    const { data } = await supabase.from('book_listing').select(
      `
          *,
          users (
            full_name,
            phone
          )
        `
    );

    return (data ?? []) as IBookSaleWithUser[];
  };

  return useQuery({
    queryKey: ['bookListingsWithUsers'],
    queryFn: getBookListingsWithUsers,
  });
};
