import {
  useSharedValue,
  useAnimatedScrollHandler,
  withTiming,
  useAnimatedStyle,
} from 'react-native-reanimated';

export const useAnimatedHeader = () => {
  const scrollY = useSharedValue(0);
  const headerOpacity = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;

      if (scrollY.value > 180) {
        headerOpacity.value = withTiming(1, { duration: 300 });
      } else {
        headerOpacity.value = withTiming(0, { duration: 300 });
      }
    },
  });

  const animatedHeaderStyle = useAnimatedStyle(() => ({
    opacity: headerOpacity.value,
  }));

  return { scrollHandler, animatedHeaderStyle };
};
