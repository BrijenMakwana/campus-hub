import { useQuery } from '@tanstack/react-query';

import { supabase } from '~/supabase';

export const useMyListedBooks = () => {
  const myListedBooks = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { data } = await supabase.from('book_listing').select('*').eq('user_id', user?.id);

    return data;
  };

  return useQuery({
    queryKey: ['myListedBooks'],
    queryFn: myListedBooks,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    staleTime: Infinity,
  });
};
