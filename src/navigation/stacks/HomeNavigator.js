import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserDetailScreen from '../../screens/app/home/userDetail';
import HomeScreen from '../../screens/app/home';
import ChatScreen from '../../screens/app/chat';

const HomeStack = createNativeStackNavigator();


const HomeNavigator = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="UserDetail"
        component={UserDetailScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="Chat"
        component={ChatScreen}
      />
    </HomeStack.Navigator>
  )
}

export default HomeNavigator