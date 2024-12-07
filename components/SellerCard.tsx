import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { View } from 'react-native';

import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Text } from './ui/text';

import { User } from '~/lib/icons/User';
import { cn } from '~/lib/utils';
import { BookCondition, IBookSaleWithUser } from '~/types';

const SellerCard = (props: IBookSaleWithUser) => {
  dayjs.extend(relativeTime);

  const { users, book_condition, remarks, created_at, price } = props;

  const { full_name } = users;

  return (
    <View className="flex flex-row items-center justify-between gap-5 rounded-lg border border-gray-300 p-5">
      <View className="flex-1 gap-2">
        <View className="flex flex-row gap-2">
          <User className="text-foreground" size={25} strokeWidth={2} />
          <Text className="text-lg capitalize">{full_name}</Text>
        </View>

        <Badge variant="outline" className="mt-2 self-start">
          <Text
            className={cn(
              'text-sm font-medium',
              book_condition === BookCondition.GOOD
                ? 'text-green-400'
                : book_condition === BookCondition.USED
                  ? 'text-yellow-400'
                  : 'text-red-400'
            )}>
            {book_condition}
          </Text>
        </Badge>

        <Text className="text-gray-500">{remarks}</Text>

        <Text className="mt-auto text-sm">Added {dayjs(created_at).fromNow()}</Text>
      </View>

      <View className="gap-3">
        <Text className="text-right text-lg font-medium text-primary">${price}</Text>

        <Button size="sm">
          <Text>Connect</Text>
        </Button>
      </View>
    </View>
  );
};

export default SellerCard;
