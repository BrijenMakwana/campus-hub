import { useQuery } from '@tanstack/react-query';

import { supabase } from '~/supabase';

export const useWishListedBooks = () => {
  const wishListedBooks = async () => {
    const { data } = await supabase.from('book_wishlist').select('*');

    return data;
  };

  return useQuery({
    queryKey: ['wishListedBooks'],
    queryFn: wishListedBooks,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    staleTime: Infinity,
  });
};
