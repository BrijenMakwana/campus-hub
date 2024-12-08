import { View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ReanimatedSwipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import Reanimated, { SharedValue, useAnimatedStyle } from 'react-native-reanimated';

import BookItem from './BookItem';

import { Skeleton } from '~/components/ui/skeleton';
import { useBook } from '~/hooks';
import { Trash } from '~/lib/icons/Trash';
import { IBookSale, IWishlistBook } from '~/types';

const BookItemWrapper = (props: IWishlistBook | IBookSale) => {
  const { book_id, ...rest } = props;

  const { data: book, isPending, error } = useBook(book_id);

  if (isPending) return <Skeleton className="h-40 w-full bg-neutral-300" />;

  if (error) return;

  return (
    <GestureHandlerRootView>
      <ReanimatedSwipeable
        friction={2}
        enableTrackpadTwoFingerGesture
        rightThreshold={40}
        renderRightActions={RightAction}>
        <BookItem {...book} {...rest} id={book_id} />
      </ReanimatedSwipeable>
    </GestureHandlerRootView>
  );
};

export default BookItemWrapper;

function RightAction(prog: SharedValue<number>, drag: SharedValue<number>) {
  const styleAnimation = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: drag.value + 100 }],
    };
  });

  return (
    <Reanimated.View style={styleAnimation}>
      <View
        style={{
          width: 100,
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Trash
          className="text-secondary"
          size={25}
          strokeWidth={2}
          style={{
            width: 100,
          }}
        />
      </View>
    </Reanimated.View>
  );
}
