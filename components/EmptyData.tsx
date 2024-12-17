import LottieView from 'lottie-react-native';
import { View } from 'react-native';

import { Text } from './ui/text';

const EmptyData = ({ text }: { text: string }) => {
  return (
    <View className="items-center justify-center px-10 py-32">
      <LottieView
        autoPlay
        loop
        style={{
          width: 250,
          height: 250,
        }}
        source={require('../assets/booklist.zip')}
        speed={1}
      />

      <Text className="text-center">{text}</Text>
    </View>
  );
};

export default EmptyData;
