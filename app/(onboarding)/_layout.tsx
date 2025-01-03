import { Stack } from 'expo-router';

export default function OnBoardingLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="sign-in" />
      <Stack.Screen name="sign-up" />
    </Stack>
  );
}
