import { useState } from 'react';
import { View, Pressable, Text, ViewProps } from 'react-native';

import { cn } from '~/lib/utils';

const ExpandableText = (props: ViewProps) => {
  const { children, ...rest } = props;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <View {...rest} className={cn(!isExpanded && 'max-h-40', 'overflow-hidden')}>
        {children}
      </View>

      {!isExpanded && (
        <Pressable onPress={() => setIsExpanded(true)} className="self-start">
          <Text>Read more</Text>
        </Pressable>
      )}
    </>
  );
};

export default ExpandableText;
