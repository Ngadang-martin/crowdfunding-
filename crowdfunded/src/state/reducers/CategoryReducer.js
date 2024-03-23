import * as constant from '../constant'

const initialState = {
    category: [],
    fail: {}
}

export default function categoryReducer(state = initialState, action) {
    switch (action.type) {
        case constant.GET_CATEGORY:
            return {
                ...state,
                category: action.payload
            }
        case constant.FAIL_CATEGORY:
            return {
                ...state,
                fail: action.payload
            }
        default:
            return state;
    }
}