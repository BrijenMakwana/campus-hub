import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { View, Text, ViewProps, TouchableOpacity } from 'react-native';

import { cn } from '~/lib/utils';

const ExpandableText = (props: ViewProps) => {
  const { children, ...rest } = props;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <View className="relative">
      <View {...rest} className={cn(!isExpanded && 'max-h-40', 'overflow-hidden')}>
        {children}
        {!isExpanded && (
          <LinearGradient
            colors={['transparent', 'white']}
            locations={[0, 1]}
            className="absolute bottom-0 h-12 w-full"
          />
        )}
      </View>
      {!isExpanded && (
        <TouchableOpacity onPress={() => setIsExpanded(true)} className="mt-2 self-start">
          <Text className="text-primary">Read more</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ExpandableText;
