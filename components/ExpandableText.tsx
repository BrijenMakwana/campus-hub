import { useState } from 'react';
import { View, Text, ViewProps, TouchableOpacity } from 'react-native';

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
        <TouchableOpacity onPress={() => setIsExpanded(true)} className="self-start">
          <Text className="text-primary">Read more</Text>
        </TouchableOpacity>
      )}
    </>
  );
};

export default ExpandableText;
