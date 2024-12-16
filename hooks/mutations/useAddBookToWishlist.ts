import { useMutation, useQueryClient } from '@tanstack/react-query';
import Toast from 'react-native-toast-message';

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
      queryClient.invalidateQueries({ queryKey: ['wishListedBooks'] });

      Toast.show({
        type: 'success',
        text1: 'Book successfully added to your wishlist!',
        topOffset: 50,
      });
    },
    onError: (error) => {
      Toast.show({
        type: 'error',
        text1: error.message,
        topOffset: 50,
      });
    },
  });
};
