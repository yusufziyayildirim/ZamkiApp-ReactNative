import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/app/home';

const AppStack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <AppStack.Navigator initialRouteName="Home">
            <AppStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        </AppStack.Navigator>
    )
}

export default AppNavigator