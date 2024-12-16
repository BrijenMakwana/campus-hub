import {
  useSharedValue,
  useAnimatedScrollHandler,
  withTiming,
  useAnimatedStyle,
} from 'react-native-reanimated';

export const useAnimatedHeader = () => {
  const scrollY = useSharedValue(0);
  const headerPosition = useSharedValue(-200);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;

      if (scrollY.value > 110) {
        headerPosition.value = withTiming(0, { duration: 300 });
      } else {
        headerPosition.value = withTiming(-200, { duration: 300 });
      }
    },
  });

  const animatedHeaderStyle = useAnimatedStyle(() => ({
    top: headerPosition.value,
  }));

  return { scrollHandler, animatedHeaderStyle };
};
