import { Text } from 'react-native';

interface ITag {
  children: string;
}

const Tag = ({ children }: ITag) => {
  return <Text className="rounded-full border-2 px-3 py-2 text-xs font-medium">{children}</Text>;
};

export default Tag;
