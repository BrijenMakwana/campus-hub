import { View, Text, Pressable } from 'react-native';
import Animated, { useAnimatedStyle, withSpring, useSharedValue } from 'react-native-reanimated';

import { cn } from '~/lib/utils';

const TAB_HEIGHT = 100;

const tabs = [
  { id: 0, label: 'Newest' },
  { id: 1, label: 'Mint' },
  { id: 2, label: 'Deals' },
];

interface IVerticalTabs {
  activeTab: number;
  setActiveTab: (tab: number) => void;
}

const VerticalTabs = ({ activeTab, setActiveTab }: IVerticalTabs) => {
  const animatedPosition = useSharedValue(0);

  const handleTabPress = (tabId: number) => {
    setActiveTab(tabId);
    animatedPosition.value = withSpring(tabId * TAB_HEIGHT, {
      damping: 15,
      stiffness: 100,
    });
  };

  const indicatorStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: animatedPosition.value }],
  }));

  return (
    <View className="relative mr-4 w-8">
      <Animated.View
        className="absolute left-0 mr-5 h-24 w-1.5 rounded-r-md bg-secondary"
        style={indicatorStyle}
      />

      <View className="ml-3 flex flex-col">
        {tabs.map((tab) => (
          <Pressable
            key={tab.id}
            onPress={() => handleTabPress(tab.id)}
            className={cn(
              'h-28 justify-center',
              activeTab === tab.id ? 'opacity-100' : 'opacity-50'
            )}>
            <View className="w-8 items-center justify-center">
              <Text
                className={cn(
                  'font-medium',
                  activeTab === tab.id ? 'text-gray-900' : 'text-gray-500'
                )}
                style={{
                  transform: [{ rotate: '-90deg' }],
                  width: TAB_HEIGHT,
                  textAlign: 'center',
                }}>
                {tab.label}
              </Text>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default VerticalTabs;
