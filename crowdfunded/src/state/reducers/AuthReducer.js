import * as constant from '../constant'

const initialState = {
    token: {},
    logedin: false,
    register: {},
    userInfo: {},
    fail: {}
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {

        case constant.GET_LOGIN_SUCCESS:
            state.token = action.payload;
            state.logedin = true
            return state;
        case constant.GET_LOGIN_FAILED:
            state.fail = action.payload
            return state;
        case constant.REGISTER_SUCCESS:
            state.register = action.payload
            return state;
        case constant.REGISTER_FAILED:
            state.fail = action.payload
            return state;
        case constant.GET_USER_INFO_SUCCESS:
            state.userInfo = action.payload
            return state;
        case constant.GET_USER_INFO_FAILED:
            state.fail = action.payload
            return state;
        default:
            return state;


    }
}