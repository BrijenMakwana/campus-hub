import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Fontisto from '@expo/vector-icons/Fontisto';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarIconStyle: {
          marginBottom: 1,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Fontisto name="home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="search-books"
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => <Fontisto name="search" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="wishlist"
        options={{
          title: 'Wishlist',
          tabBarIcon: ({ color }) => <FontAwesome6 name="book-bookmark" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
