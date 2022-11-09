import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../store/auth/authSlice";
import { isTokenValid } from '../store/auth/authActions';
import SplashScreen from '../screens/splash';;

import AuthNavigator from "./AuthNavigator";
import AppNavigator from "./AppNavigator";

const AppRoute = () => {
    const dispatch = useDispatch()
    const { userToken } = useSelector(state => state.auth);

    useEffect(() => {
        dispatch(isTokenValid())
    }, []);

    const isLoggedIn = useSelector(selectIsLoggedIn);

    if (userToken == null) {
        return <SplashScreen />
    }

    return (
        <NavigationContainer>
            {
                (isLoggedIn)
                    ? <AppNavigator />
                    : <AuthNavigator />
            }
        </NavigationContainer>
    )

}

export default AppRoute