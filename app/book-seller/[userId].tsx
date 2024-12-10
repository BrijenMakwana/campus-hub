import { useLocalSearchParams } from 'expo-router';
import { View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BookItemWrapper from '~/components/BookItemWrapper';
import Error from '~/components/Error';
import GoBack from '~/components/GoBack';
import Loading from '~/components/Loading';
import { Separator } from '~/components/ui/separator';
import { Text } from '~/components/ui/text';
import { useBookListingsByUser, useBookSeller } from '~/hooks';

const BookSellerScreen = () => {
  const { userId } = useLocalSearchParams();

  const { data: user, isPending, error, refetch } = useBookSeller(userId);

  const { data: books } = useBookListingsByUser(userId);

  if (isPending) return <Loading />;

  if (error) return <Error refetch={refetch} />;

  const { full_name, phone } = user;

  return (
    <SafeAreaView className="flex-1 gap-5 bg-background">
      <GoBack className="ml-3" />

      <View className="gap-2 px-5">
        <Text className="text-2xl font-semibold capitalize">{full_name}</Text>
        <Text className="font-medium text-gray-500">{phone}</Text>
      </View>

      <Separator />
      <Text className="ml-5 text-lg font-medium">Books for Sale ({books?.length})</Text>
      <FlatList
        data={books}
        renderItem={({ item }) => <BookItemWrapper {...item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerClassName="gap-5 pb-10 px-5"
      />
    </SafeAreaView>
  );
};

export default BookSellerScreen;
