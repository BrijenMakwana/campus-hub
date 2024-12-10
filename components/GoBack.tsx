import { router } from 'expo-router';
import { TouchableOpacity } from 'react-native';

import { Text } from './ui/text';

import { ChevronLeft } from '~/lib/icons/ChevronLeft';
import { cn } from '~/lib/utils';

interface IGoBack {
  className?: string;
  text?: string;
  color?: string;
}

const GoBack = (props: IGoBack) => {
  const { className, text, color } = props;

  return (
    <TouchableOpacity
      className={cn('flex flex-row items-center gap-1 self-start py-2 pr-2', className)}
      onPress={() => router.back()}>
      <ChevronLeft className={cn('text-secondary', color)} size={25} strokeWidth={2} />
      {text && <Text className={cn('text-lg capitalize', color)}>{text}</Text>}
    </TouchableOpacity>
  );
};

export default GoBack;
