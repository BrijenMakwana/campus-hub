import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { TouchableOpacity, View } from 'react-native';

import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Text } from './ui/text';

import { User } from '~/lib/icons/User';
import { cn } from '~/lib/utils';
import { BookCondition, IBookSaleWithUser } from '~/types';
import { Link } from 'expo-router';

const SellerCard = (props: IBookSaleWithUser) => {
  dayjs.extend(relativeTime);

  const { users, user_id, book_condition, remarks, created_at, price } = props;

  const { full_name } = users;

  return (
    <View className="mx-5 flex flex-row items-center justify-between gap-5 rounded-lg bg-secondary/15 p-5">
      <View className="flex-1 gap-2">
        <Link href={`/book-seller/${user_id}`} asChild>
          <TouchableOpacity className="flex flex-row gap-2">
            <User className="text-foreground" size={25} strokeWidth={2} />
            <Text className="text-lg capitalize">{full_name}</Text>
          </TouchableOpacity>
        </Link>
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

        <Text>{remarks}</Text>

        <Text className="mt-auto text-sm">Added {dayjs(created_at).fromNow()}</Text>
      </View>

      <View className="gap-3">
        <Text className="text-right text-lg font-medium text-accent">${price}</Text>

        <Button size="sm" className="bg-secondary">
          <Text>Connect</Text>
        </Button>
      </View>
    </View>
  );
};

export default SellerCard;
