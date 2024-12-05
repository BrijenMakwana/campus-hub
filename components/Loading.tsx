import LottieView from 'lottie-react-native';

const Loading = () => {
  return (
    <LottieView
      autoPlay
      loop
      style={{
        width: 100,
        height: 100,
        alignSelf: 'center',
      }}
      source={require('../assets/login.zip')}
      speed={1}
    />
  );
};

export default Loading;
