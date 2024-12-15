import { Link } from 'expo-router';
import { View, TouchableOpacity } from 'react-native';

import Loading from './Loading';
import { Separator } from './ui/separator';
import { Text } from './ui/text';

import { useCurrentUser } from '~/hooks';
import { Info } from '~/lib/icons/Info';

const Header = () => {
  const { data: user, isPending } = useCurrentUser();

  if (isPending) return <Loading />;

  return (
    <>
      <View className="flex flex-row items-center justify-between gap-2 px-5 pt-5">
        <View className="flex-1 gap-3">
          <Text className="text-neutral-60 text-lg font-medium">
            Hello {user?.user_metadata.full_name}
          </Text>
          <Text className="bg-background text-2xl">Explore, Connect, and Read!</Text>
        </View>

        <Link href="/app-info" asChild>
          <TouchableOpacity className="p-3">
            <Info className="text-foreground" size={23} strokeWidth={1.5} />
          </TouchableOpacity>
        </Link>
      </View>

      <Separator className="mt-3" />
    </>
  );
};

export default Header;
