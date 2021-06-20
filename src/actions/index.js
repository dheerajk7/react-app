import { APIUrls, LOADING_CONSTANT } from '../constants';
import { LOADING_START, LOADING_STOP, LOGIN_USER, LOGOUT_USER } from '../actions/actionTypes';
export function loadingStart(loading) {
    return {
        type: LOADING_START,
        loading,
    };
}

export function loadingStop() {
    return {
        type: LOADING_STOP,
    };
}

export function logoutUser() {
    return {
        type: LOGOUT_USER,
    }
}

export function setLoginUser(userProfile) {
    return {
        type: LOGIN_USER,
        userProfile,
    }
}

export function loginUser(body) {
    return async (dispatch) => {
        await dispatch(loadingStart(LOADING_CONSTANT.loginButton));
        const url = APIUrls.loginUser();
        await fetch(url, {
            method: 'POST',
            body: body,
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('data login API', data);
                if (data.success) {
                    dispatch(setLoginUser(data.data[0]));
                }
            });
        await dispatch(loadingStop());
    };
}