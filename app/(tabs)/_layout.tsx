import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Fontisto from '@expo/vector-icons/Fontisto';
import { Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import BookshelfIcon from '../../assets/tab_icons/bookshelf.svg';
import HomeIcon from '../../assets/tab_icons/home.svg';
import SearchIcon from '../../assets/tab_icons/search.svg';

import TabBarIcon from '~/components/TabBarIcon';
import { THEME } from '~/lib/constants';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarIconStyle: {
          marginBottom: 1,
        },
        tabBarActiveTintColor: THEME.light.primary,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <TabBarIcon Icon={HomeIcon} />
            ) : (
              <Fontisto name="home" size={24} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="sell-books"
        options={{
          tabBarButton: (props) => (
            <Pressable
              {...props}
              className="items-center justify-center"
              style={{
                top: -20,
              }}>
              <FontAwesome6 name="circle-plus" size={45} color={THEME.light.primary} />
            </Pressable>
          ),
        }}
      />
      <Tabs.Screen
        name="search-books"
        options={{
          title: 'Search',
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <TabBarIcon Icon={SearchIcon} />
            ) : (
              <Fontisto name="search" size={24} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="book-listing"
        options={{
          title: 'Bookshelf',
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <TabBarIcon Icon={BookshelfIcon} />
            ) : (
              <FontAwesome6 name="book-bookmark" size={24} color={color} />
            ),
        }}
      />
    </Tabs>
  );
}
