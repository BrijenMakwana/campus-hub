import { View } from 'react-native';

import Loading from './Loading';
import { Separator } from './ui/separator';
import { Text } from './ui/text';

import { useCurrentUser } from '~/hooks';

const Header = () => {
  const { data: user, isPending } = useCurrentUser();

  if (isPending) return <Loading />;

  return (
    <View className="gap-3 px-5 pt-5">
      <Text className="text-neutral-60 text-xl">Hello {user?.user_metadata.full_name}</Text>
      <Text className="text-2xl">Explore, Connect, and Read!</Text>

      <Separator />
    </View>
  );
};

export default Header;
