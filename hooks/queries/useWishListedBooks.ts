import { useQuery } from '@tanstack/react-query';

import { supabase } from '~/supabase';
import { IWishlistBook } from '~/types';

export const useWishListedBooks = () => {
  const wishListedBooks = async (): Promise<IWishlistBook[]> => {
    const { data } = await supabase.from('book_wishlist').select('*');

    return (data ?? []) as IWishlistBook[];
  };

  return useQuery({
    queryKey: ['wishListedBooks'],
    queryFn: wishListedBooks,
  });
};
