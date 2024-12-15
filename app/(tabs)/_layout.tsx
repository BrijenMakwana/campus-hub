import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from 'expo-router';

import BookshelfIcon from '../../assets/tab_icons/bookshelf.svg';
import HomeIcon from '../../assets/tab_icons/home.svg';
import ProfileIcon from '../../assets/tab_icons/profile.svg';
import SearchIcon from '../../assets/tab_icons/search.svg';

import TabBarIcon from '~/components/TabBarIcon';
import { THEME } from '~/lib/constants';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 55,
        },
        tabBarLabelStyle: {
          marginTop: 5,
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
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <TabBarIcon Icon={ProfileIcon} />
            ) : (
              <MaterialCommunityIcons name="account" size={24} color={color} />
            ),
        }}
      />
    </Tabs>
  );
}
