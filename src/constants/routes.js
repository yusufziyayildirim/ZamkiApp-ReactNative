
const BASE_URL = "http://192.168.1.41:8000/api";
const routes = {
    LOGIN: BASE_URL + "/login",
    LOGOUT: BASE_URL + "/logout",
    REGISTER: BASE_URL + "/register",
    LOGGED_USER: BASE_URL + "/loggeduser",
    RESEND_NOTIFICATION: BASE_URL + "/email/verification-notification",
    RESET_PASSWORD_MAIL: BASE_URL + "/send-reset-password-email",
    CHANGE_PASSWORD: BASE_URL + "/changepassword",
}

export default routes;