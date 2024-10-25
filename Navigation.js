import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Updated import
import { Ionicons } from '@expo/vector-icons';
import Feed from './screens/Feed';
import Settings from './screens/Settings';
import Login from './screens/Login';
import Home from './screens/Home';
import SignUp from './screens/SignUp';
import ForgotPassword from './screens/ForgotPassword';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator(); // Updated to Native Stack

// Tab Navigator for bottom tabs
function GroupTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") iconName = focused ? "home" : "home-outline";
          if (route.name === "Feed") {
            iconName = focused ? "albums" : "albums-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          } else if (route.name === "Login") {
            iconName = focused ? "log-in" : "log-in-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Login" component={Login} />
    </Tab.Navigator>
  );
}

// Stack Navigator that includes the hidden SignUp screen
function RootNavigator() {
  return (
    <Stack.Navigator>
      {/* The Tab Navigator is the default */}
      <Stack.Screen name="Tabs" component={GroupTab} options={{ headerShown: false }} />
      {/* Add SignUp to the stack, but not to the tabs */}
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

