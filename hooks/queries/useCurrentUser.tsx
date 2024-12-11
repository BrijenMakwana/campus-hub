import { useQuery } from '@tanstack/react-query';

import { supabase } from '~/supabase';

export const useCurrentUser = () => {
  const getCurrentUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    return user;
  };

  return useQuery({
    queryKey: ['currentUser'],
    queryFn: getCurrentUser,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    staleTime: Infinity,
  });
};
