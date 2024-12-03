import { router } from 'expo-router';
import { TouchableOpacity } from 'react-native';

import { ChevronLeft } from '~/lib/icons/ChevronLeft';

const GoBack = () => {
  return (
    <TouchableOpacity className="p-2" onPress={() => router.back()}>
      <ChevronLeft className="text-foreground" size={23} strokeWidth={1.25} />
    </TouchableOpacity>
  );
};

export default GoBack;
