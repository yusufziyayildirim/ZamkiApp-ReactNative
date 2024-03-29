import axios from "axios";
import routes from "../constants/routes";
import AsyncStorage from '@react-native-async-storage/async-storage';
import headerConfig from "../utils/headerConfig";
import { getToken } from "../utils/headerConfig";

const register = (name, email, password, password_confirmation) => {
    return axios
        .post(routes.REGISTER,
            {
                name,
                email,
                password,
                password_confirmation
            },
            {
                headers: headerConfig()
            }
        );
};

const login = async (email, password) => {
    return axios
        .post(routes.LOGIN,
            {
                email,
                password,
            },
            {
                headers: headerConfig()
            }
        ).then(async (response) => {
            if (response.data.status) {
                AsyncStorage.setItem('userToken', response.data.data)
            }
            return await isTokenValid()
        });
};

const isTokenValid = async () => {
    let token;
    const headers = await headerConfig();

    //Get logged user data
    const currentUser = await axios.get(routes.LOGGED_USER, { headers: headers })
    if (currentUser) {
        token = await getToken()
    }
    return [token, currentUser.data.data[0]]
}

const logout = async () => {
    const headers = await headerConfig();
    const response = await axios.post(routes.LOGOUT, {}, { headers: headers })

    if (response.data.status) {
        AsyncStorage.getAllKeys()
            .then(keys => AsyncStorage.multiRemove(keys))
    }
    return response
}

const forgotPassword = async (email) => {
    try {
        const response = await axios
            .post(routes.RESET_PASSWORD_MAIL,
                { email },
                { headers: await headerConfig() }
            )
        return response
    } catch (error) {
        if (error.response && error.response.data.message) {
            return error.response.data.message
        } else {
            return error.message
        }
    }
}

const verifyEmail = async (email) => {
    try {
        const response = await axios
            .post(routes.RESEND_NOTIFICATION,
                { email },
                { headers: await headerConfig() }
            )
        return response
    } catch (error) {
        if (error.response && error.response.data.message) {
            return error.response.data.message
        } else {
            return error.message
        }
    }
}



const AuthService = {
    register,
    login,
    isTokenValid,
    logout,
    forgotPassword,
    verifyEmail
};

export default AuthService;