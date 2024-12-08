import { useMutation, useQueryClient } from '@tanstack/react-query';
import Toast from 'react-native-toast-message';

import { supabase } from '~/supabase';

export const useRemoveBookFromWishlist = () => {
  const queryClient = useQueryClient();

  const addBookToWishlist = async ({ id }: { id: number }) => {
    const { error } = await supabase.from('book_wishlist').delete().eq('id', id);

    if (error) throw new Error(error.message);
  };

  return useMutation({
    mutationFn: addBookToWishlist,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['wishListedBooks'] });
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
