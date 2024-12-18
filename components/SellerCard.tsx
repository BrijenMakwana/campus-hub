import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Link } from 'expo-router';
import { TouchableOpacity, View } from 'react-native';

import ConnectCall from './ConnectCall';
import { Badge } from './ui/badge';
import { Text } from './ui/text';
import StudentIcon from '../assets/student.svg';

import { useCurrentUser } from '~/hooks';
import { cn } from '~/lib/utils';
import useCurrencyStore from '~/store';
import { BookCondition, IBookSaleWithUser } from '~/types';

const SellerCard = (props: IBookSaleWithUser) => {
  dayjs.extend(relativeTime);

  const { users, user_id, book_condition, remarks, created_at, price } = props;

  const { full_name, phone } = users;

  const { data: currentUser } = useCurrentUser();

  const { currency, getExchangeRate } = useCurrencyStore();

  return (
    <View
      className={cn(
        'mx-5 flex flex-row items-center justify-between gap-5 rounded-2xl bg-secondary/20 p-5',
        currentUser?.id === user_id && 'bg-accent/20'
      )}>
      <View className="flex-1 gap-2">
        <Link href={`/book-seller/${user_id}`} asChild>
          <TouchableOpacity className="flex flex-row items-center gap-3">
            <StudentIcon height={30} width={30} />
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

        <Text className="mt-auto text-sm text-neutral-500">
          Added {dayjs(created_at).fromNow()}
        </Text>
      </View>

      <View className="gap-3">
        <Text className="text-right text-lg font-medium text-primary">
          {currency.symbol}
          {getExchangeRate(price)}
        </Text>

        {currentUser?.id !== user_id ? (
          <ConnectCall phone={phone} />
        ) : (
          <Text className="font-medium text-accent">Your Listing</Text>
        )}
      </View>
    </View>
  );
};

export default SellerCard;
