import { useLocalSearchParams } from 'expo-router';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Error from '~/components/Error';
import GoBack from '~/components/GoBack';
import Loading from '~/components/Loading';
import { Text } from '~/components/ui/text';
import { useBookSeller } from '~/hooks';

const BookSellerScreen = () => {
  const { userId } = useLocalSearchParams();

  const { data: user, isPending, error, refetch } = useBookSeller(userId);

  if (isPending) return <Loading />;

  if (error) return <Error refetch={refetch} />;

  const { full_name, phone } = user;

  return (
    <SafeAreaView className="flex-1 gap-5 bg-background p-5">
      <GoBack />

      <View className="gap-2">
        <Text className="text-2xl font-semibold capitalize">{full_name}</Text>
        <Text className="font-medium text-gray-500">{phone}</Text>
      </View>
    </SafeAreaView>
  );
};

export default BookSellerScreen;
