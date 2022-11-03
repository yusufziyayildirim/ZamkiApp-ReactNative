import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainScreen from '../screens/auth/main';
import LoginScreen from '../screens/auth/login';
import RegisterScreen from '../screens/auth/register';
import ForgotPasswordScreen from '../screens/auth/forgotPassword';
import VerifyEmailScreen from '../screens/auth/verifyEmail';

const AuthStack = createNativeStackNavigator();

const AuthNavigator = () => {
    return (
        <AuthStack.Navigator initialRouteName="Main">
            <AuthStack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
            <AuthStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <AuthStack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
            <AuthStack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ headerShown: false }} />
            <AuthStack.Screen name="VerifyEmail" component={VerifyEmailScreen} options={{ headerShown: false }} />
        </AuthStack.Navigator>
    )
}

export default AuthNavigator