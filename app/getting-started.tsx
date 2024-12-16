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
            title: 'Buy and Sell Course Books with Students',
            subtitle: 'Connect with university students to buy and sell your course books',
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
            title: 'Your Campus Book Network',
            subtitle: 'Safe trading with verified university students only',
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
