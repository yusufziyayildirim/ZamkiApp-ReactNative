import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../theme/colors';
import { TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import UserDetailScreen from '../../screens/app/home/userDetail';
import HomeScreen from '../../screens/app/home';

const HomeStack = createNativeStackNavigator();


const HomeNavigator = () => {
  return (
    <HomeStack.Navigator initialRouteName="Profile">
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
    </HomeStack.Navigator>
  )
}

export default HomeNavigator