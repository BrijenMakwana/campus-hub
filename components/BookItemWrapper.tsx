import { useState } from 'react';
import { View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ReanimatedSwipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import Reanimated, { SharedValue, useAnimatedStyle } from 'react-native-reanimated';

import BookItem from './BookItem';
import SellBookModal from './SellBookModal';
import { Button } from './ui/button';

import { Skeleton } from '~/components/ui/skeleton';
import { useBook } from '~/hooks';
import { Edit } from '~/lib/icons/Edit';
import { Trash } from '~/lib/icons/Trash';
import { IBookSale, IWishlistBook } from '~/types';

type BookItemWrapperProps = (IWishlistBook | IBookSale) & {
  removeBook?: () => void;
};

const BookItemWrapper = (props: BookItemWrapperProps) => {
  const { id, book_id, removeBook, ...rest } = props;
  const [modalVisible, setModalVisible] = useState(false);

  const { data: book, isPending, error } = useBook(book_id);

  if (isPending) return <Skeleton className="h-40 w-full bg-neutral-300" />;

  if (error) return;

  if (!removeBook) return <BookItem {...book} {...rest} id={book_id} />;

  if (modalVisible && 'price' in props)
    return (
      <SellBookModal
        bookId={book_id}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        defaultValues={{
          bookCondition: props.book_condition,
          price: props.price.toString(),
          remarks: props.remarks || '',
        }}
        mode="update"
        id={id}
      />
    );

  return (
    <GestureHandlerRootView>
      <ReanimatedSwipeable
        friction={2}
        enableTrackpadTwoFingerGesture
        rightThreshold={40}
        renderRightActions={(progress, drag) => (
          <RightAction
            prog={progress}
            drag={drag}
            removeBook={removeBook}
            isEditable={'price' in props}
            editBook={() => setModalVisible(true)}
          />
        )}>
        <BookItem {...book} {...rest} id={book_id} />
      </ReanimatedSwipeable>
    </GestureHandlerRootView>
  );
};

export default BookItemWrapper;

function RightAction({
  prog,
  drag,
  removeBook,
  isEditable,
  editBook,
}: {
  prog: SharedValue<number>;
  drag: SharedValue<number>;
  removeBook: () => void;
  isEditable: boolean;
  editBook?: () => void;
}) {
  const styleAnimation = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: drag.value + 130 }],
    };
  });

  return (
    <Reanimated.View style={styleAnimation}>
      <View
        style={{
          width: 130,
        }}
        className="flex h-full flex-row items-center justify-center gap-3">
        {isEditable && (
          <Button variant="outline" onPress={editBook}>
            <Edit className="text-gray-800" size={20} strokeWidth={2} />
          </Button>
        )}

        <Button onPress={removeBook} variant="outline">
          <Trash className="text-red-400" size={20} strokeWidth={2} />
        </Button>
      </View>
    </Reanimated.View>
  );
}
