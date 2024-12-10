import { useQuery } from '@tanstack/react-query';

import { supabase } from '~/supabase';

export const useBookSeller = (userId: string) => {
  const getBookSeller = async () => {
    const { data } = await supabase.from('users').select('*').eq('id', userId).single();

    return data;
  };

  return useQuery({
    queryKey: [userId],
    queryFn: getBookSeller,
    enabled: !!userId,
  });
};
