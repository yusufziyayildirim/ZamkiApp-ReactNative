import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import routes from '../../constants/routes'


const getToken = async () => {
    try {
        const token = await AsyncStorage.getItem('userToken');
        return token
    } catch (e) {
        // save error
    }
}

export const isTokenValid = createAsyncThunk(
    'user/getUserDetails',
    async (arg, { rejectWithValue }) => {
        try {
            // get user data from asyncstorage
            const token = await getToken()

            // configure authorization header with user's token
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }

            const user = await axios.get(routes.LOGGED_USER, config)

            // AsyncStorage.getItem('@userInfo', user.data.data)
            return user
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

export const registerUser = createAsyncThunk(
    'user/register',
    async ({ name, email, password, password_confirmation }, { rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            const response = await axios.post(
                routes.REGISTER,
                {
                    name,
                    email,
                    password,
                    password_confirmation
                },
                config
            )
            return response.data.message
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

export const userLogin = createAsyncThunk(
    'user/login',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            // configure header's Content-Type as JSON
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            const response = await axios.post(
                routes.LOGIN,
                { email, password },
                config
            )
            if (response.data.status) {
                // store user's token in local storage
                await AsyncStorage.setItem('userToken', response.data.data)

                return response
            }

            return rejectWithValue(response.data.message)

        } catch (error) {
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

export const logout = createAsyncThunk(
    'user/logout',
    async (arg, { rejectWithValue }) => {
        try {
            // get user data from asyncstorage
            const token = await getToken()

            // configure authorization header with user's token
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }

            await axios.post(routes.LOGOUT, {} ,config)
            // AsyncStorage.getAllKeys()
            //     .then(keys => AsyncStorage.multiRemove(keys))
            // AsyncStorage.getItem('@userInfo', user.data.data)
            return
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

export const forgotPassword = createAsyncThunk(
    'user/forgot',
    async ({ email }, { rejectWithValue }) => {
        try {
            //configure authorization header with user's token
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            const response = await axios.post(routes.RESET_PASSWORD_MAIL, { email }, config)

            return response.data.message
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)
