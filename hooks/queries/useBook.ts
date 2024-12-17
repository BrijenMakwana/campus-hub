import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { IGoogleBook } from '~/types';

export const useBook = (bookId: string) => {
  const getBook = async (): Promise<IGoogleBook> => {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${bookId}`, {
      params: {
        key: process.env.EXPO_PUBLIC_GOOGLE_BOOKS_API_KEY,
      },
    });

    return response.data;
  };

  return useQuery({
    queryKey: ['googleBook', bookId],
    queryFn: getBook,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    staleTime: Infinity,
  });
};
