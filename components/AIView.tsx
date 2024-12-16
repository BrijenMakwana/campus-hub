import { LinearGradient } from 'expo-linear-gradient';
import LottieView from 'lottie-react-native';
import { TouchableOpacity } from 'react-native';

import { Text } from './ui/text';

import { useAI } from '~/hooks';
import { THEME } from '~/lib/constants';
import { cn } from '~/lib/utils';

interface IAIView {
  text: string;
  prompt: string;
  className?: string;
}

const AIView = (props: IAIView) => {
  const { text, prompt, className } = props;

  const { data: answer, isFetching, error, refetch, isSuccess } = useAI(prompt);

  return (
    <LinearGradient
      colors={[THEME.light.secondary, THEME.light.accent, THEME.light.primary]}
      className={cn('absolute bottom-5 right-5 p-1', className)}
      style={{
        borderRadius: 100,
      }}>
      <TouchableOpacity
        className="flex flex-row items-center justify-between rounded-full bg-background pr-3"
        onPress={() => refetch()}
        disabled={isFetching || isSuccess}>
        <LottieView
          autoPlay
          loop
          style={{
            height: 40,
            width: 40,
          }}
          source={require('./../assets/ai.zip')}
          speed={1}
        />

        {isFetching ? (
          <Text className="text-sm">Just a moment, AI is working…</Text>
        ) : (
          <Text className="text-sm">{answer ?? text}</Text>
        )}

        {error && <Text className="text-red-400">{error.message}</Text>}
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default AIView;
