import { useMutation } from '@tanstack/react-query';
import { router } from 'expo-router';
import Toast from 'react-native-toast-message';

import { supabase } from '~/supabase';

export const useLogout = () => {
  const logout = async () => {
    const { error } = await supabase.auth.signOut({ scope: 'local' });

    if (error) throw new Error(error.message);
  };

  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      router.replace('/(onboarding)/sign-in');
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
