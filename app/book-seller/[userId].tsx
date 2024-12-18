import { useLocalSearchParams } from 'expo-router';
import { View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import StudentIcon from '../../assets/student.svg';

import BookItemWrapper from '~/components/BookItemWrapper';
import ConnectCall from '~/components/ConnectCall';
import Error from '~/components/Error';
import GoBack from '~/components/GoBack';
import Loading from '~/components/Loading';
import { Separator } from '~/components/ui/separator';
import { Text } from '~/components/ui/text';
import { useBookListingsByUser, useBookSeller, useCurrentUser } from '~/hooks';
import { Mail } from '~/lib/icons/Mail';
import { Phone } from '~/lib/icons/Phone';

const BookSellerScreen = () => {
  const { userId } = useLocalSearchParams();

  const { data: user, isPending, error, refetch } = useBookSeller(userId);

  const { data: books } = useBookListingsByUser(userId);

  const { data: currentUser } = useCurrentUser();

  if (isPending) return <Loading />;

  if (error) return <Error refetch={refetch} />;

  const { full_name, phone, email } = user;

  return (
    <SafeAreaView className="flex-1 gap-5 bg-background">
      <GoBack className="ml-3" text="Back" color="text-secondary" />

      <View className="flex flex-row items-center justify-between px-5">
        <View className="flex-1 gap-3">
          <View className="flex flex-row items-center gap-3">
            <StudentIcon height={30} width={30} />
            <Text className="text-2xl font-semibold capitalize">{full_name}</Text>
          </View>

          <View className="flex flex-row items-center gap-3">
            <Mail className="text-gray-500" size={20} strokeWidth={2} />
            <Text className="font-medium text-gray-500">{email}</Text>
          </View>

          <View className="flex flex-row items-center gap-3">
            <Phone className="text-gray-500" size={20} strokeWidth={2} />
            <Text className="font-medium text-gray-500">{phone}</Text>
          </View>
        </View>

        {currentUser?.id !== userId && <ConnectCall phone={phone} />}
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
