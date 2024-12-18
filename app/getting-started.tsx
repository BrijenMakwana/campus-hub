import * as Clipboard from 'expo-clipboard';
import { router } from 'expo-router';
import { View } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import Toast from 'react-native-toast-message';

import Slide1 from '../assets/getting_started/slide_1.svg';
import Slide2 from '../assets/getting_started/slide_2.svg';
import Slide3 from '../assets/getting_started/slide_3.svg';
import Slide4 from '../assets/getting_started/slide_4.svg';
import Slide5 from '../assets/getting_started/slide_5.svg';

import SVG6 from '~/components/svgs/SVG6';
import { Button } from '~/components/ui/button';
import { Text } from '~/components/ui/text';
import { THEME } from '~/lib/constants';
import { Copy } from '~/lib/icons/Copy';

const ICON_SIZE = 220;

const GettingStarted = () => {
  const testEmail = '201812010@daiict.ac.in';

  const goToLogin = () => {
    router.replace('/(onboarding)/sign-in');
  };

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(testEmail);
    Toast.show({
      type: 'success',
      text1: 'Copied to Clipboard',
      topOffset: 50,
    });
  };

  return (
    <View className="flex-1 bg-background">
      <SVG6 />

      <Onboarding
        pages={[
          {
            backgroundColor: THEME.light.background,
            image: <Slide1 height={ICON_SIZE} width={ICON_SIZE} />,
            title: 'Buy and Sell Books with Fellow Students',
            subtitle:
              'Easily connect with students from your University to buy or sell course books directly within your campus community.',
          },
          {
            backgroundColor: THEME.light.background,
            image: <Slide2 height={ICON_SIZE} width={ICON_SIZE} />,
            title: 'Find Books in Seconds',
            subtitle: 'Powered by Google Books - no manual entry needed',
          },
          {
            backgroundColor: THEME.light.background,
            image: <Slide3 height={ICON_SIZE} width={ICON_SIZE} />,
            title: 'Your Campus-Exclusive Book Network',
            subtitle:
              'Buy and sell books securely with verified students from your University only.',
          },
          {
            backgroundColor: THEME.light.background,
            image: <Slide4 height={ICON_SIZE} width={ICON_SIZE} />,
            title: 'Smart Price Suggestions',
            subtitle: 'Get AI recommendations for fair buying and selling prices',
          },
          {
            backgroundColor: THEME.light.background,
            image: <Slide5 height={ICON_SIZE} width={ICON_SIZE} />,
            title: 'Explore Campus Hub with Test Credentials',
            subtitle: (
              <View className="gap-5 px-10">
                <Text className="text-lg">
                  Want to try Campus Hub before signing up? Use our test account to explore all
                  features.
                </Text>

                <View className="gap-1">
                  <Text className="font-medium">Email: {testEmail}</Text>
                  <Text className="font-medium">Password: test1234</Text>
                </View>

                <Button
                  className="flex flex-row items-center gap-3 self-start"
                  variant="outline"
                  onPress={copyToClipboard}>
                  <Copy className="text-primary" size={25} strokeWidth={1.25} />
                  <Text>Copy Email</Text>
                </Button>
              </View>
            ),
          },
        ]}
        bottomBarColor={THEME.light.primary}
        subTitleStyles={{
          paddingHorizontal: 10,
        }}
        onSkip={goToLogin}
        onDone={goToLogin}
      />
    </View>
  );
};

export default GettingStarted;
