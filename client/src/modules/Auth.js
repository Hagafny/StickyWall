import { getCookie, deleteCookie } from './cookieHandler.js';

let isUserAuthenticated = () => {
    return getUserIdCookie() != "";
}

let deauthenticateUser = () => {
    deleteCookie('uid');
}

let getUserIdCookie = () => {
    return getCookie('uid');
}
module.exports = {
    isUserAuthenticated: isUserAuthenticated,
    deauthenticateUser: deauthenticateUser,
    getUserIdCookie: getUserIdCookie
}
