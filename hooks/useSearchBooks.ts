import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { IBook } from '~/types';

export const useSearchBooks = (query: string) => {
  const searchBooks = async (): Promise<IBook[]> => {
    const response = await axios.get('https://www.googleapis.com/books/v1/volumes?', {
      params: {
        q: query,
        key: process.env.EXPO_PUBLIC_GOOGLE_BOOKS_API_KEY,
      },
    });

    return response.data.items;
  };

  return useQuery({
    queryKey: [query],
    queryFn: searchBooks,
    enabled: false,
  });
};
