import {
    LOGIN_USER,
    LOGOUT_USER,
    LOADING_START,
    LOADING_STOP,
} from '../actions/actionTypes';

// loading reducer intial state to maintain message and error
const initialState = {
    loading: '',
    userProfile: '',
    isLoggedIn: false,
    isDoctor: false,
};

// changing message state in store on the basis of different actions for setting alerts
export default function auth(state = initialState, action) {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                userProfile: action.userProfile,
                isLoggedIn: true,
            };
        case LOGOUT_USER:
            return {
                ...state,
                userProfile: {},
                isLoggedIn: false
            }
        case LOADING_START: {
            return {
                ...state,
                loading: action.loading,
            }
        }
        case LOADING_STOP: {
            return {
                ...state,
                loading: '',
            }
        }
        //   case CLEAR_MESSAGE:
        //     return {
        //       ...state,
        //       message: null,
        //     };
        //   case SET_ERROR:
        //     return {
        //       ...state,
        //       error: { title: action.title, detail: action.detail },
        //     };
        //   case CLEAR_ERROR:
        //     return {
        //       ...state,
        //       error: null,
        //     };
        default:
            return state;
    }
}