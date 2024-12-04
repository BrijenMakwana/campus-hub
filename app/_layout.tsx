import '../global.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';

const queryClient = new QueryClient();

export const unstable_settings = {
  initialRouteName: '(onboarding)',
};

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar style="dark" />

      <Stack initialRouteName="(onboarding)">
        <Stack.Screen name="(onboarding)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="book/[bookId]" options={{ headerShown: false }} />
      </Stack>
    </QueryClientProvider>
  );
}
