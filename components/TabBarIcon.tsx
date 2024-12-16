import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withSequence,
} from 'react-native-reanimated';
import { SvgProps } from 'react-native-svg';

const TabBarIcon = ({ Icon }: { Icon: React.FC<SvgProps> }) => {
  const scale = useSharedValue(1);

  scale.value = withSequence(withSpring(1.2, { damping: 4 }), withSpring(1, { damping: 4 }));

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Animated.View style={animatedStyle}>
      <Icon height={32} width={32} />
    </Animated.View>
  );
};

export default TabBarIcon;
