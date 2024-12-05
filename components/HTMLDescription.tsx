import { TextProps } from 'react-native';

import { Text } from './ui/text';

interface IHTMLDescription extends TextProps {
  text: string;
}

const HTMLDescription = (props: IHTMLDescription) => {
  const { text, ...rest } = props;

  const formattedText = text?.replace(/<[^>]*>/g, '');

  return <Text {...rest}>{formattedText || ''}</Text>;
};

export default HTMLDescription;
