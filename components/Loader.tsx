import LottieView from 'lottie-react-native';
import { StyleSheet, View } from 'react-native';

import { Text } from './ui/text';

interface ILoader {
  varient: 'loading' | 'searching';
}

const Loader = (props: ILoader) => {
  const { varient } = props;

  return (
    <View className="h-full w-full items-center justify-center gap-3">
      <LottieView
        autoPlay
        loop
        style={styles.lottie}
        source={
          varient === 'loading'
            ? require('./../assets/loading.zip')
            : require('./../assets/search.zip')
        }
        speed={1}
      />
      <Text className="capitalize">{varient === 'loading' ? 'hold on...' : 'searching...'}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  lottie: {
    height: 100,
    width: 100,
  },
});

export default Loader;
