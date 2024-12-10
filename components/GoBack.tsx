import { router } from 'expo-router';
import { TouchableOpacity } from 'react-native';

import { ChevronLeft } from '~/lib/icons/ChevronLeft';
import { cn } from '~/lib/utils';

const GoBack = ({ className }: { className?: string }) => {
  return (
    <TouchableOpacity
      className={cn('self-start py-2 pr-2', className)}
      onPress={() => router.back()}>
      <ChevronLeft className="text-secondary" size={25} strokeWidth={2} />
    </TouchableOpacity>
  );
};

export default GoBack;
