import { useLocalSearchParams } from 'expo-router';
import { View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Animated, { FlipInEasyY, Easing } from 'react-native-reanimated';

import ExpandableText from '~/components/ExpandableText';
import GoBack from '~/components/GoBack';
import HTMLDescription from '~/components/HTMLDescription';
import Loader from '~/components/Loader';
import SvgShape from '~/components/SvgShape';
import { Badge } from '~/components/ui/badge';
import { Text } from '~/components/ui/text';
import { useAnimatedHeader, useBook } from '~/hooks';

const BookScreen = () => {
  const { bookId } = useLocalSearchParams();

  const { scrollHandler, animatedHeaderStyle } = useAnimatedHeader();

  const { data: book, isPending, error } = useBook(bookId);

  if (isPending) return <Loader varient="loading" />;

  if (error) return <Text>error</Text>;

  const {
    imageLinks,
    title,
    pageCount,
    publishedDate,
    authors,
    averageRating,
    categories,
    description,
  } = book.volumeInfo;

  return (
    <>
      <Animated.View
        className="absolute top-0 z-10 flex w-full flex-row items-center justify-between gap-2 border-b border-b-border bg-background px-5 py-2 pt-16"
        style={animatedHeaderStyle}>
        <GoBack />

        <Text className="flex-1 text-xl" numberOfLines={2}>
          {title}
        </Text>
      </Animated.View>

      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        className="bg-background"
        contentContainerClassName="pb-16"
        onScroll={scrollHandler}
        scrollEventThrottle={16}>
        <SvgShape color="#f683a7" secondaryColor="#f39655" />

        <Animated.Image
          source={{
            uri: imageLinks?.thumbnail || 'https://via.placeholder.com/300x400',
          }}
          className="mt-32 aspect-[3/4] w-48 self-center rounded-md"
          resizeMode="stretch"
          entering={FlipInEasyY.delay(200).duration(300).easing(Easing.inOut(Easing.quad))}
        />

        <Text className="mt-3 text-center font-medium">{pageCount} pages</Text>

        <View className="mt-8 gap-4 px-5">
          <View className="flex flex-row items-start justify-between gap-5">
            <View className="flex-1 gap-2">
              <Text className="text-2xl font-medium">{title}</Text>

              <Text className="font-semibold text-accent">by {authors.join(', ')}</Text>

              <Badge variant="outline" className="self-start">
                <Text className="font-semibold">{publishedDate}</Text>
              </Badge>
            </View>

            {averageRating && (
              <AnimatedCircularProgress
                size={45}
                width={4}
                fill={averageRating * 20}
                tintColor={
                  averageRating >= 4 ? '#4ade80' : averageRating >= 3 ? '#fbbf24' : '#f87171'
                }
                backgroundColor="#d1d5db"
                delay={200}>
                {() => <Text className="text-sm font-semibold">{averageRating}/5</Text>}
              </AnimatedCircularProgress>
            )}
          </View>

          <ExpandableText>
            <HTMLDescription text={description} />
          </ExpandableText>

          <View className="flex flex-row flex-wrap items-center gap-2">
            {categories?.map((category, index) =>
              category.split('/').map((item, subIndex) => (
                <Badge key={`${index}-${subIndex}`} variant="outline">
                  <Text>{item}</Text>
                </Badge>
              ))
            )}
          </View>
        </View>
      </Animated.ScrollView>
    </>
  );
};

export default BookScreen;
