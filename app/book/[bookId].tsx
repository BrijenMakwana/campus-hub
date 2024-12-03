import { useLocalSearchParams } from 'expo-router';
import { ActivityIndicator, Image, ScrollView, View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Animated, { RollInRight, Easing } from 'react-native-reanimated';

import ExpandableText from '~/components/ExpandableText';
import { Badge } from '~/components/ui/badge';
import { Text } from '~/components/ui/text';
import { useBook } from '~/hooks';

const BookScreen = () => {
  const { bookId } = useLocalSearchParams();

  const { data: book, isPending, error } = useBook(bookId);

  if (isPending) return <ActivityIndicator />;

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
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <Image
          source={{
            uri: imageLinks.thumbnail,
          }}
          className="h-80 w-fit"
          blurRadius={5}
        />

        <Animated.Image
          source={{
            uri: imageLinks.thumbnail,
          }}
          className="absolute -bottom-16 left-5 aspect-[3/4] w-36 rounded-md"
          resizeMode="stretch"
          entering={RollInRight.delay(100).duration(300).easing(Easing.inOut(Easing.quad))}
        />

        <View className="bg-secondary absolute bottom-5 right-0 gap-3 rounded-l-full p-2 pl-5">
          <Text>{pageCount} pages</Text>
        </View>
      </View>

      <View className="mt-20 gap-4 px-5">
        <View className="flex flex-row items-start justify-between gap-5">
          <View className="flex-1 gap-2">
            <Text className="text-2xl font-medium">{title}</Text>

            <Text>by {authors.join(', ')}</Text>

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
              {() => <Text className="text-md font-semibold">{averageRating}</Text>}
            </AnimatedCircularProgress>
          )}
        </View>

        <ExpandableText numberOfLines={5} className="font-light">
          {description}
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
    </ScrollView>
  );
};

export default BookScreen;
