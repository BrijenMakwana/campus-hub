import { Link } from 'expo-router';
import { View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ReanimatedSwipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import Reanimated, { SharedValue, useAnimatedStyle } from 'react-native-reanimated';

import BookItem from './BookItem';
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

  const { data: book, isPending, error } = useBook(book_id);

  if (isPending) return <Skeleton className="h-40 w-full bg-neutral-300" />;

  if (error) return;

  if (!removeBook) return <BookItem {...book} {...rest} id={book_id} />;

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
            bookListingId={id}
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
  bookListingId,
}: {
  prog: SharedValue<number>;
  drag: SharedValue<number>;
  removeBook: () => void;
  isEditable: boolean;
  bookListingId: number;
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
          <Link href={`/update-book-listing/${bookListingId}`} asChild>
            <Button variant="outline">
              <Edit className="text-gray-800" size={20} strokeWidth={2} />
            </Button>
          </Link>
        )}

        <Button onPress={removeBook} variant="outline">
          <Trash className="text-red-400" size={20} strokeWidth={2} />
        </Button>
      </View>
    </Reanimated.View>
  );
}
