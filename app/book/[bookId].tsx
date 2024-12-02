import { useLocalSearchParams } from 'expo-router';
import { ActivityIndicator, Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ExpandableText from '~/components/ExpandableText';
import Tag from '~/components/Tag';
import { useBook } from '~/hooks';

const BookScreen = () => {
  const { bookId } = useLocalSearchParams();

  const { data: book, isPending, error } = useBook(bookId);

  if (isPending) return <ActivityIndicator />;

  if (error) return <Text>error</Text>;

  const { imageLinks, title, authors, categories, description } = book.volumeInfo;

  return (
    <SafeAreaView className="flex-1">
      <ScrollView contentContainerClassName="items-center p-10 gap-5">
        <Image
          source={{
            uri: imageLinks.thumbnail,
          }}
          className="aspect-[3/4] w-56"
        />

        <Text className="text-2xl font-bold">{title}</Text>

        <Text className="text-lg">by {authors.join(', ')}</Text>

        <View className="flex flex-row flex-wrap items-center justify-center gap-2">
          {categories?.map((category, index) =>
            category
              .split('/')
              .map((item, subIndex) => <Tag key={`${index}-${subIndex}`}>{item}</Tag>)
          )}
        </View>

        <ExpandableText numberOfLines={5}>{description}</ExpandableText>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BookScreen;
