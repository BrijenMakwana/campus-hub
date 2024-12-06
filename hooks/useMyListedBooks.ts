import { useQuery } from '@tanstack/react-query';

import { supabase } from '~/supabase';

export const useMyListedBooks = () => {
  const myListedBooks = async () => {
    const { data } = await supabase.from('book_listing').select('*');

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
