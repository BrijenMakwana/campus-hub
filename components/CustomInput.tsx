import { TextInputProps, View } from 'react-native';

import { Input } from './ui/input';
import { Label } from './ui/label';
import { Text } from './ui/text';

interface ICustomInput extends TextInputProps {
  label: string;
  error?: string;
}

const CustomInput = (props: ICustomInput) => {
  const { label, error, ...rest } = props;

  return (
    <View className="gap-2">
      <View className="flex flex-row flex-wrap items-center gap-3">
        <Label className="capitalize">{label}</Label>
        {error && <Text className="text-red-500">({error})</Text>}
      </View>
      <Input {...rest} />
    </View>
  );
};

export default CustomInput;
