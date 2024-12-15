import EvilIcons from '@expo/vector-icons/EvilIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { TouchableOpacity, TouchableOpacityProps, View, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import GithubCard from '~/components/GithubCard';
import GoBack from '~/components/GoBack';
import { Separator } from '~/components/ui/separator';
import { Text } from '~/components/ui/text';
import { THEME } from '~/lib/constants';

const AppInfoScreen = () => {
  return (
    <SafeAreaView className="flex-1 gap-5 bg-background p-5">
      <GoBack text="Back" color="text-secondary" />

      <View className="rounded-xl border border-input">
        <ExternalButton
          text="Source Code"
          icon={<FontAwesome5 name="github" size={25} color={THEME.light.accent} />}
          url=""
        />
        <Separator />
        <ExternalButton
          text="Privacy Policy"
          icon={<MaterialIcons name="policy" size={25} color={THEME.light.accent} />}
          url=""
        />
        <Separator />
        <ExternalButton
          text="Terms and Condition"
          icon={<FontAwesome name="legal" size={25} color={THEME.light.accent} />}
          url=""
        />
      </View>

      {/* <GithubCard repoUrl="" /> */}
    </SafeAreaView>
  );
};

export default AppInfoScreen;

interface IExternalButton extends TouchableOpacityProps {
  icon: React.ReactNode;
  text: string;
  url: string;
}

const ExternalButton = (props: IExternalButton) => {
  const { icon, text, url } = props;

  return (
    <TouchableOpacity
      className="flex flex-row items-center justify-between gap-5 px-5 py-3"
      onPress={() => Linking.openURL(url)}>
      {icon}

      <Text className="flex-1 font-medium">{text}</Text>

      <EvilIcons name="external-link" size={25} color="black" />
    </TouchableOpacity>
  );
};
