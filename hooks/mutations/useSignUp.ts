import { useMutation } from '@tanstack/react-query';
import { router } from 'expo-router';
import Toast from 'react-native-toast-message';

import { supabase } from '~/supabase';

export const useSignUp = () => {
  const signUp = async ({
    email,
    password,
    fullName,
    phone,
  }: {
    email: string;
    password: string;
    fullName: string;
    phone: string;
  }) => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
          phone: Number(phone),
        },
      },
    });

    if (error) {
      throw new Error(error.message);
    }
  };

  return useMutation({
    mutationFn: signUp,
    onSuccess: () => {
      router.back();
      Toast.show({
        type: 'mailToast',
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
