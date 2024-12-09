import LottieView from 'lottie-react-native';
import { StyleSheet, View } from 'react-native';

import { Button } from './ui/button';
import { Text } from './ui/text';

interface IError {
  refetch: () => void;
}

const Error = (props: IError) => {
  const { refetch } = props;

  return (
    <View className="h-full w-full items-center justify-center bg-background">
      <LottieView
        autoPlay
        loop
        style={styles.lottie}
        source={require('./../assets/error.zip')}
        speed={1}
      />

      <Button onPress={refetch}>
        <Text className="capitalize">Retry</Text>
      </Button>
    </View>
  );
};
const styles = StyleSheet.create({
  lottie: {
    height: 250,
    width: 250,
  },
});

export default Error;
