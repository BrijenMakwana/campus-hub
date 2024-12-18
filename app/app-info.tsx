import EvilIcons from '@expo/vector-icons/EvilIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { TouchableOpacity, TouchableOpacityProps, View, Linking, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import GithubCard from '~/components/GithubCard';
import GoBack from '~/components/GoBack';
import { Separator } from '~/components/ui/separator';
import { Text } from '~/components/ui/text';
import { THEME } from '~/lib/constants';

const AppInfoScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView className="flex-1" contentContainerClassName="gap-5 p-5">
        <GoBack text="Back" color="text-secondary" />

        <View className="rounded-2xl border border-input">
          <ExternalButton
            text="Source Code"
            icon={<FontAwesome5 name="github" size={25} color={THEME.light.accent} />}
            url="https://github.com/BrijenMakwana/campus-hub"
          />
          <Separator />
          <ExternalButton
            text="Privacy Policy"
            icon={<MaterialIcons name="policy" size={25} color={THEME.light.accent} />}
            url="https://campus-hub-policies.vercel.app/privacy-policy.html"
          />
          <Separator />
          <ExternalButton
            text="Terms and Condition"
            icon={<FontAwesome name="legal" size={25} color={THEME.light.accent} />}
            url="https://campus-hub-policies.vercel.app/terms-and-conditions.html"
          />
        </View>

        <GithubCard repoUrl="https://api.github.com/repos/BrijenMakwana/campus-hub" />
      </ScrollView>
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
