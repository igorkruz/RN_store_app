import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/public_screens/HomeScreen';
import { Platform } from 'react-native';
import { TabButton } from '../components/bottomTab/BottomTab';
import { SavedItemsScreen } from '../screens/public_screens/SavedItemsScreen';
import { NotificationsScreen } from '../screens/public_screens/NotificationsScreen';
import { ProfileScreen } from '../screens/public_screens/ProfileScreen';
import { HomeScreenIcon, NotificationsScreenIcon, ProfileScreenIcon, SavedScreenIcon } from '../assets/icons/bottomMenuIcons';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigation = () => {
  return (
    <Tab.Navigator
    screenOptions={{ 
      headerShown: false,
      tabBarStyle: {
        height: Platform.OS === 'android' ? 74 : 110,
        borderColor: 'transparent',
        backgroundColor: '#fff',
        elevation: 0,
        borderRadius: 18,
        // position: 'absolute',
        // bottom: 30,
        // marginHorizontal: 20,
      },
    }}>
    
      <Tab.Screen 
        name="home_screen" 
        component={HomeScreen} 
        options={{
          unmountOnBlur: true,
          tabBarButton: (props) => <TabButton {...props} itemIcon={HomeScreenIcon} tabTitle={'Головна'}/>
        }}
      />

      <Tab.Screen 
        name="saved_items_screen" 
        component={SavedItemsScreen} 
        options={{
          unmountOnBlur: true,
          tabBarButton: (props) => <TabButton {...props} itemIcon={SavedScreenIcon} tabTitle={'Saved Items'}/>
        }}
      />

      <Tab.Screen 
        name="notifications_screen" 
        component={NotificationsScreen} 
        options={{
          unmountOnBlur: true,
          tabBarButton: (props) => <TabButton {...props} itemIcon={NotificationsScreenIcon} tabTitle={'Notifications'}/>
        }}
      />

      <Tab.Screen 
        name="profile_screen" 
        component={ProfileScreen} 
        options={{
          unmountOnBlur: true,
          tabBarButton: (props) => <TabButton {...props} itemIcon={ProfileScreenIcon} tabTitle={'Profile'}/>
        }}
      />
    </Tab.Navigator>
  )
}