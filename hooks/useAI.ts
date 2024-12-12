import { GoogleGenerativeAI } from '@google/generative-ai';
import { useQuery } from '@tanstack/react-query';

const genAI = new GoogleGenerativeAI(process.env.EXPO_PUBLIC_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

export const useAI = (prompt: string) => {
  const generateContent = async () => {
    const result = await model.generateContent(prompt);
    return result.response.text();
  };

  return useQuery({
    queryKey: [prompt],
    queryFn: generateContent,
    enabled: false,
  });
};
