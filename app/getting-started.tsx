import { router } from 'expo-router';
import { View } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

import Slide1 from '../assets/getting_started/slide_1.svg';
import Slide2 from '../assets/getting_started/slide_2.svg';
import Slide3 from '../assets/getting_started/slide_3.svg';
import Slide4 from '../assets/getting_started/slide_4.svg';

import SVG6 from '~/components/svgs/SVG6';
import { THEME } from '~/lib/constants';

const ICON_SIZE = 220;

const GettingStarted = () => {
  const goToLogin = () => {
    router.replace('/(onboarding)/sign-in');
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
