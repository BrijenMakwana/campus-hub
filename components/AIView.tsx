import LottieView from 'lottie-react-native';
import { TouchableOpacity } from 'react-native';

import { Text } from './ui/text';

import { useAI } from '~/hooks';

interface IAIView {
  text: string;
  prompt: string;
}

const AIView = (props: IAIView) => {
  const { text, prompt } = props;

  const { data: answer, isFetching, error, refetch, isSuccess } = useAI(prompt);

  return (
    <TouchableOpacity
      className="gap5 absolute bottom-5 right-5 flex flex-row items-center justify-between rounded-full bg-secondary px-5"
      onPress={() => refetch()}
      disabled={isFetching || isSuccess}>
      <LottieView
        loop
        style={{
          height: 45,
          width: 45,
        }}
        source={require('./../assets/ai.zip')}
        speed={1}
      />

      {isFetching ? (
        <Text className="text-sm text-background">AI is generating...</Text>
      ) : (
        <Text className="text-sm text-background">{answer ?? text}</Text>
      )}

      {error && <Text className="text-background">{error.message}</Text>}
    </TouchableOpacity>
  );
};

export default AIView;
