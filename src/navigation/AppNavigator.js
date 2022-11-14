import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBar from '../containers/TabBar';
import ProfileNavigator from './stacks/ProfileNavigator';
import RoomsScreen from '../screens/app/rooms';
import HomeNavigator from './stacks/HomeNavigator';
import ChatsNavigator from './stacks/ChatsNavigator';
// import ProfileScreen from '../screens/app/profile';


const TabNavigator = createBottomTabNavigator();

const AppNavigator = () => {
    return (
        <TabNavigator.Navigator initialRouteName="Home" tabBar={props => <TabBar {...props} />}>
            <TabNavigator.Screen name="HomeStack" component={HomeNavigator} options={{ headerShown: false }} /> 
            <TabNavigator.Screen name="ChatsStack" component={ChatsNavigator} options={{ headerShown: false }} /> 
            <TabNavigator.Screen name="Rooms" component={RoomsScreen} options={{ headerShown: false }} /> 
            <TabNavigator.Screen name="ProfileStack" component={ProfileNavigator} options={{ headerShown: false }} /> 
        </TabNavigator.Navigator>
    )
}

export default AppNavigator