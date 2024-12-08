import { View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ReanimatedSwipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import Reanimated, { SharedValue, useAnimatedStyle } from 'react-native-reanimated';

import BookItem from './BookItem';

import { Skeleton } from '~/components/ui/skeleton';
import { useBook } from '~/hooks';
import { Edit } from '~/lib/icons/Edit';
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
        }}
        className="flex h-full flex-row items-center justify-center gap-5">
        <Edit className="text-gray-800" size={23} strokeWidth={2} />
        <Trash className="text-red-400" size={23} strokeWidth={2} />
      </View>
    </Reanimated.View>
  );
}
