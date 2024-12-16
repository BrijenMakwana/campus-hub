import LottieView, { AnimationObject } from 'lottie-react-native';
import { View } from 'react-native';

import { Text } from './ui/text';

export const TreeToast = () => {
  return (
    <CustomLottieView
      source={require('../assets/tree.zip')}
      text="🌳 A Tree Saved! Your Book Will Be Reused!"
      size={150}
    />
  );
};

export const DeleteToast = () => {
  return (
    <CustomLottieView
      source={require('../assets/delete.zip')}
      text="Book Successfully Removed!"
      size={80}
    />
  );
};

export const UpdateToast = () => {
  return (
    <CustomLottieView
      source={require('../assets/done.zip')}
      text="Book Successfully Removed!"
      size={80}
    />
  );
};

export const BookmarkToast = () => {
  return (
    <CustomLottieView
      source={require('../assets/bookmark.zip')}
      text="Book Added to Wishlist!"
      size={80}
    />
  );
};

interface ICustomLottieView {
  source:
    | string
    | AnimationObject
    | {
        uri: string;
      }
    | undefined;
  text: string;
  size: number;
}

const CustomLottieView = (props: ICustomLottieView) => {
  const { source, text, size } = props;

  return (
    <View className="items-center justify-center gap-5 rounded-2xl bg-background p-5 shadow-md">
      <LottieView
        autoPlay
        loop
        style={{
          width: size,
          height: size,
        }}
        source={source}
        speed={1}
      />

      <Text>{text}</Text>
    </View>
  );
};
