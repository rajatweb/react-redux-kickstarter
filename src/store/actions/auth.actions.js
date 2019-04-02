import  { auth } from '../constants'

export const authStart = () => {
    return {
        type: auth.AUTH_START
    };
};

export const authSuccess = (user) => {
    return {
        type: auth.AUTH_SUCCESS,
        user: user
    };
};

export const authFail = (error) => {
    return {
        type: auth.AUTH_FAIL,
        error: error
    };
};