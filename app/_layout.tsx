import '../global.css';
import { PortalHost } from '@rn-primitives/portal';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import Toast from 'react-native-toast-message';

import {
  BookmarkToast,
  DeleteToast,
  MailToast,
  TreeToast,
  UpdateToast,
} from '~/components/CustomToasts';

const queryClient = new QueryClient();

export const unstable_settings = {
  initialRouteName: '(onboarding)',
};

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar style="dark" />

      <Stack
        initialRouteName="(onboarding)"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="getting-started" />
        <Stack.Screen name="(onboarding)" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="book/[bookId]" />
        <Stack.Screen name="book-seller/[userId]" />
        <Stack.Screen name="sell-book/[bookId]" />
        <Stack.Screen name="update-book-listing" />
        <Stack.Screen name="app-info" />
      </Stack>

      <Toast
        config={{
          mailToast: () => <MailToast />,
          treeToast: () => <TreeToast />,
          deleteToast: () => <DeleteToast />,
          bookmarkToast: () => <BookmarkToast />,
          updateToast: () => <UpdateToast />,
        }}
      />
      <PortalHost />
    </QueryClientProvider>
  );
}
