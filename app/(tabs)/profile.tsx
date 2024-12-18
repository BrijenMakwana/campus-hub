import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import StudentIcon from '../../assets/student.svg';

import CurrencyPicker from '~/components/CurrencyPicker';
import Error from '~/components/Error';
import Institute from '~/components/Institute';
import Loading from '~/components/Loading';
import { Button } from '~/components/ui/button';
import { Separator } from '~/components/ui/separator';
import { Text } from '~/components/ui/text';
import { useCurrentUser, useLogout } from '~/hooks';
import { Mail } from '~/lib/icons/Mail';
import { Phone } from '~/lib/icons/Phone';

const ProfileScreen = () => {
  const { data: user, isPending: isUserPending, error, refetch } = useCurrentUser();

  const { mutate: logout, isPending: isLogoutPending } = useLogout();

  if (isUserPending) return <Loading />;

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

        <Institute email={user?.email} />
      </View>

      <Separator />

      <CurrencyPicker />

      <View className="mt-auto">
        {isLogoutPending ? (
          <Loading />
        ) : (
          <Button size="lg" variant="destructive" onPress={() => logout()}>
            <Text>Logout</Text>
          </Button>
        )}
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
