import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Error from '~/components/Error';
import Loading from '~/components/Loading';
import { Button } from '~/components/ui/button';
import { Separator } from '~/components/ui/separator';
import { Text } from '~/components/ui/text';
import { useCurrentUser } from '~/hooks';

const ProfileScreen = () => {
  const { data: user, isPending, error, refetch } = useCurrentUser();

  if (isPending) return <Loading />;

  if (error) return <Error refetch={refetch} />;

  return (
    <SafeAreaView className="flex-1 gap-5 bg-background p-5">
      <View className="gap-2">
        <Text className="text-2xl font-semibold capitalize">{user?.user_metadata.full_name}</Text>
        <Text className="font-medium text-gray-500">{user?.email}</Text>
        <Text className="font-medium text-gray-500">{user?.user_metadata.phone}</Text>
      </View>

      <Separator />

      <Button size="lg" className="mb-5 mt-auto" variant="destructive">
        <Text>Logout</Text>
      </Button>
    </SafeAreaView>
  );
};

export default ProfileScreen;
