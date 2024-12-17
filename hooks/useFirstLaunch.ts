import AsyncStorage from '@react-native-async-storage/async-storage';
import { useQuery } from '@tanstack/react-query';

const checkFirstLaunch = async () => {
  const hasLaunched = await AsyncStorage.getItem('hasLaunched');
  if (hasLaunched === null) {
    await AsyncStorage.setItem('hasLaunched', 'true');
    return true;
  }
  return false;
};

export const useFirstLaunch = () => {
  return useQuery({
    queryKey: ['firstLaunch'],
    queryFn: checkFirstLaunch,
  });
};
