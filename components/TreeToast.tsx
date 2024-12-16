import LottieView from 'lottie-react-native';
import { View } from 'react-native';

import { Text } from './ui/text';

const TreeToast = () => {
  return (
    <View className="items-center justify-center gap-5 rounded-xl bg-background p-5 shadow-md">
      <LottieView
        autoPlay
        loop
        style={{
          width: 150,
          height: 150,
        }}
        source={require('../assets/tree.zip')}
        speed={1}
      />

      <Text>🌳 A Tree Saved! Your Book Will Be Reused!</Text>
    </View>
  );
};

export default TreeToast;
