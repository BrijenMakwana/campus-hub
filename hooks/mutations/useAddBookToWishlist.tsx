import { useMutation } from '@tanstack/react-query';

import { supabase } from '~/supabase';

export const useAddBookToWishlist = () => {
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
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
