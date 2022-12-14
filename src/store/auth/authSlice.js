import { createSlice } from "@reduxjs/toolkit";
import { forgotPassword, isTokenValid, registerUser, userLogin, logout } from "./authActions";

let initialState = {
    loading: false,
    userInfo: null, // for user object
    userToken: null, // for storing the JWT
    error: null,
    success: null, // for monitoring the registration process.
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset(state) {
            state.loading = false
            state.error = false
            state.success = false
        },
        setUserInfo(state, payload) {
            state.userInfo = payload
        },
    },
    extraReducers: {

        // get user details
        [isTokenValid.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [isTokenValid.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.userToken = payload[0]
            state.userInfo = payload[1]
        },
        [isTokenValid.rejected]: (state) => {
            state.userToken = false
            state.loading = false
            // state.error = payload
        },

        // register user
        [registerUser.pending]: (state) => {
            state.loading = true
            state.error = null
            state.success = null
        },
        [registerUser.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.success = payload
        },
        [registerUser.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },

        // login user
        [userLogin.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [userLogin.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.userToken = payload[0]
            state.userInfo = payload[1]
        },
        [userLogin.rejected]: (state, { payload }) => {
            state.loading = false
            state.userToken = false
            state.error = payload
        },

        [logout.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [logout.fulfilled]: (state) => {
            state.loading = false
            state.userInfo = null
            state.userToken = false
            state.error = null
            state.loading = false
        },
        [logout.rejected]: (state, { payload }) => {
            state.loading = false
            state.userToken = false
            state.error = payload
        },

        // forgot password
        [forgotPassword.pending]: (state) => {
            state.loading = true
            state.error = null
            state.success = null
        },
        [forgotPassword.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.success = payload
        },
        [forgotPassword.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },

    },
})

export const selectIsLoggedIn = (state) => state.auth.userToken;
export const { reset, setUserInfo } = authSlice.actions

export default authSlice.reducer;