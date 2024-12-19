import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function ensureHttps(imageUrl: string | undefined) {
  if (!imageUrl) return;

  if (imageUrl.startsWith('https://')) {
    return imageUrl;
  }

  return imageUrl.replace('http://', 'https://');
}
