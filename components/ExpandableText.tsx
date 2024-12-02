import { useState } from 'react';
import { View, Pressable, TextProps, Text } from 'react-native';

const ExpandableText = (props: TextProps) => {
  const { numberOfLines, children, ...rest } = props;
  const [textIsExpanded, setTextIsExpanded] = useState(false);

  return (
    <View>
      <Text numberOfLines={textIsExpanded ? undefined : numberOfLines} {...rest}>
        {children}
      </Text>
      {!textIsExpanded && (
        <Pressable onPress={() => setTextIsExpanded(true)} className="self-start">
          <Text>Read more</Text>
        </Pressable>
      )}
    </View>
  );
};

export default ExpandableText;
