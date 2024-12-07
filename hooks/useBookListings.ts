import { useQuery } from '@tanstack/react-query';

import { supabase } from '~/supabase';

export const useBookListings = (bookId: string) => {
  const getBookListings = async () => {
    const { data } = await supabase
      .from('book_listing')
      .select(
        `
          *,
          users (
            full_name,
            phone
          )
        `
      )
      .eq('book_id', bookId);

    return data;
  };

  return useQuery({
    queryKey: [`bookListings ${bookId}`],
    queryFn: getBookListings,
    enabled: !!bookId,
  });
};
