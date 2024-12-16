import { useQuery } from '@tanstack/react-query';

import { supabase } from '~/supabase';

export const useIsBookInWishlist = (bookId: string | undefined) => {
  const isBookInWishlist = async (): Promise<boolean> => {
    if (!bookId) return false;

    const { data } = await supabase
      .from('book_wishlist')
      .select('id')
      .eq('book_id', bookId)
      .single();

    return !!data;
  };

  return useQuery({
    queryKey: ['isBookInWishlist', bookId],
    queryFn: isBookInWishlist,
    enabled: !!bookId,
  });
};
