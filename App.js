import HomeScreen from './app/screens/HomeScreen';
import PlayerScreen from './app/screens/PlayerScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

import AudioProvider from './app/context/AudioContext';
import AudioManager from './app/middleware/AudioManager';


const Tab = createBottomTabNavigator();




const screenOptions = ({ route }) => ({
  activeTintColor: 'blue',
  inactiveTintColor: 'gray',
  style: {
    backgroundColor: 'transparent', // background color of the tab bar
  },
  headerShown: false,
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === 'Home') {
      iconName = focused ? 'home' : 'home-outline'; // name of the icon
    } else if (route.name === 'Profile') {
      iconName = focused ? 'person' : 'person-outline'; // name of the icon
    } else if (route.name === 'Music') {
      iconName = focused ? 'musical-notes' : 'musical-notes-outline'; // name of the icon
    }

    // You can return any component here, such as an icon component from your chosen library
    return <Ionicons name={iconName} size={size} color={color} />;
  },
})



export default function App() {
  return (
    <NavigationContainer>
      <AudioProvider>
        <AudioManager>
          <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Music" component={PlayerScreen} />
          </Tab.Navigator>
        </AudioManager>
      </AudioProvider>
    </NavigationContainer>
  );
}
