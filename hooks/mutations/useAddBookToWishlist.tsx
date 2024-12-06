import { useMutation, useQueryClient } from '@tanstack/react-query';

import { supabase } from '~/supabase';

export const useAddBookToWishlist = () => {
  const queryClient = useQueryClient();

  const addBookToWishlist = async ({ bookId }: { bookId: string }) => {
    const { error } = await supabase
      .from('book_wishlist')
      .insert([{ book_id: bookId }])
      .select();

    if (error) throw new Error(error.message);
  };

  return useMutation({
    mutationFn: addBookToWishlist,
    onSuccess: () => {
      console.log('added');
      queryClient.invalidateQueries({ queryKey: ['wishListedBooks'] });
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
