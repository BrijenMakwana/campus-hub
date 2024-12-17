import { View } from 'react-native';

import UniversityIcon from '../assets/university.svg';
import { Text } from './ui/text';

interface IInstitute {
  email: string | undefined;
}

const Institute = (props: IInstitute) => {
  const { email } = props;

  if (!email) return;

  const institute = email.split('@')[1].split('.')[0];

  return (
    <View className="flex flex-row items-center gap-3 self-start rounded-full border border-foreground px-4 py-2">
      <UniversityIcon height={20} width={20} />
      <Text className="font-medium">{institute}</Text>
    </View>
  );
};

export default Institute;
