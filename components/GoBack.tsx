import { router } from 'expo-router';
import { TouchableOpacity } from 'react-native';

import { ChevronLeft } from '~/lib/icons/ChevronLeft';

const GoBack = () => {
  return (
    <TouchableOpacity className="p-2" onPress={() => router.back()}>
      <ChevronLeft className="text-secondary" size={23} strokeWidth={2} />
    </TouchableOpacity>
  );
};

export default GoBack;
