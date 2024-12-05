import { useMutation } from '@tanstack/react-query';
import { router } from 'expo-router';

import { supabase } from '~/supabase';

export const useSignIn = () => {
  const signIn = async ({ email, password }: { email: string; password: string }) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw new Error(error.message);
    }
  };

  return useMutation({
    mutationFn: signIn,
    onSuccess: () => {
      router.replace('/(tabs)');
    },
  });
};
