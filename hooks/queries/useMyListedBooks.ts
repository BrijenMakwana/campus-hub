import { useQuery } from '@tanstack/react-query';

import { supabase } from '~/supabase';
import { IBookSale } from '~/types';

export const useMyListedBooks = () => {
  const myListedBooks = async (): Promise<IBookSale[]> => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { data } = await supabase.from('book_listing').select('*').eq('user_id', user?.id);

    return (data ?? []) as IBookSale[];
  };

  return useQuery({
    queryKey: ['myListedBooks'],
    queryFn: myListedBooks,
  });
};
