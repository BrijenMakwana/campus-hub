import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import StudentIcon from '../../assets/student.svg';

import CurrencyPicker from '~/components/CurrencyPicker';
import Error from '~/components/Error';
import Loading from '~/components/Loading';
import { Button } from '~/components/ui/button';
import { Separator } from '~/components/ui/separator';
import { Text } from '~/components/ui/text';
import { useCurrentUser, useLogout } from '~/hooks';
import { Mail } from '~/lib/icons/Mail';
import { Phone } from '~/lib/icons/Phone';

const ProfileScreen = () => {
  const { data: user, isPending, error, refetch } = useCurrentUser();

  const { mutate: logout } = useLogout();

  if (isPending) return <Loading />;

  if (error) return <Error refetch={refetch} />;

  return (
    <SafeAreaView className="flex-1 gap-5 bg-background p-5">
      <View className="gap-3">
        <View className="flex flex-row items-center gap-3">
          <StudentIcon height={30} width={30} />
          <Text className="text-2xl font-semibold capitalize">{user?.user_metadata.full_name}</Text>
        </View>

        <View className="flex flex-row items-center gap-3">
          <Mail className="text-gray-500" size={20} strokeWidth={2} />
          <Text className="font-medium text-gray-500">{user?.user_metadata.email}</Text>
        </View>

        <View className="flex flex-row items-center gap-3">
          <Phone className="text-gray-500" size={20} strokeWidth={2} />
          <Text className="font-medium text-gray-500">{user?.user_metadata.phone}</Text>
        </View>
      </View>

      <Separator />

      <CurrencyPicker />

      <Button size="lg" className="mb-5 mt-auto" variant="destructive" onPress={() => logout()}>
        <Text>Logout</Text>
      </Button>
    </SafeAreaView>
  );
};

export default ProfileScreen;
