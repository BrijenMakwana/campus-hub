import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import { View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Institute from './Institute';
import Loading from './Loading';
import { Text } from './ui/text';

import { useCurrentUser } from '~/hooks';
import { THEME } from '~/lib/constants';
import { Info } from '~/lib/icons/Info';

const Header = () => {
  const { data: user, isPending } = useCurrentUser();

  if (isPending) return <Loading />;

  return (
    <LinearGradient colors={[THEME.light.secondary, 'transparent']}>
      <SafeAreaView className="flex flex-row justify-between gap-2 border-b border-input px-5 py-5">
        <View className="flex-1 gap-3">
          <Text className="text-neutral-60 text-lg font-medium">
            Hello {user?.user_metadata.full_name}
          </Text>
          <Text className="text-2xl">Explore, Connect, and Read!</Text>

          <Institute email={user?.email} />
        </View>

        {/* TODO: not visible */}
        <Link href="/app-info" asChild>
          <TouchableOpacity className="p-3">
            <Info className="text-foreground" size={23} strokeWidth={2} />
          </TouchableOpacity>
        </Link>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Header;
