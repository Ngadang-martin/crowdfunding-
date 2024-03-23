import * as constant from '../constant'
const initialState = {
    basics: {},
    addreward: {},
    team: {},
    content: {},
    funding: {},
    project: {},
    projectData: [],
    singleProjectData: {},
    getreward: [],
    fail: {}
}
export default function projectReducer(state = initialState, action) {
    switch (action.type) {
        case constant.PROJECT_BASICS_SUCCESS:
            return {
                ...state,
                basics: action.payload
            }
        case constant.PROJECT_BASICS_FAILED:
            return {
                ...state,
                fail: action.payload
            }
        case constant.ADD_PROJECT_REWARD:
            return {
                ...state,
                addreward: action.payload
            }
        case constant.FAIL_PROJECT_REWARD:
            return {
                ...state,
                fail: action.payload
            }
        case constant.CREATE_TEAM_SUCCESS:
            return {
                ...state,
                team: action.payload
            }
        case constant.FAIL_CREATE_TEAM:
            return {
                ...state,
                fail: action.payload
            }
        case constant.CREATE_PROJECT_FUNDING_SUCCESS:
            return {
                ...state,
                funding: action.payload
            }
        case constant.CREATE_PROJECT_FUNDING_FAILED:
            return {
                ...state,
                fail: action.payload
            }
        case constant.GET_PROJECT_REWARD_SUCCESS:
            return {
                ...state,
                getreward: action.payload
            }
        case constant.GET_PROJECT_REWARD_FAILED:
            return {
                ...state,
                fail: action.payload
            }
        case constant.EDIT_PROJECT_REWARD_SUCCESS:
            return {
                ...state,
                reward: action.payload
            }
        case constant.EDIT_PROJECT_REWARD_FAILED:
            return {
                ...state,
                fail: action.payload
            }
        case constant.GET_PROJECT_SUCCESS:
            return {
                ...state,
                project: action.payload
            }
        case constant.GET_PROJECT_FAILED:
            return {
                ...state,
                fail: action.payload
            }
        case constant.GET_PROJECT_FUNDING_SUCCESS:
            return {
                ...state,
                funding: action.payload
            }
        case constant.GET_PROJECT_FUNDING_FAILED:
            return {
                ...state,
                fail: action.payload
            }
        case constant.GET_COMPLETE_PEOJECT_SUCCESS:
            return {
                ...state,
                projectData: action.payload
            }
        case constant.GET_COMPLETE_PEOJECT_FAILED:
            return {
                ...state,
                fail: action.payload
            }
        case constant.SINGLE_COMPLETE_PROJECT_SUCCESS:
            return {
                ...state,
                singleProjectData: action.payload
            }
        case constant.SINGLE_COMPLETE_PROJECT_FAILED:
            return {
                ...state,
                fail: action.payload
            }
        case constant.INSERT_PROJECT_CONTENT_SUCCESS:
            return {
                ...state,
                content: action.payload
            }
        case constant.INSERT_PROJECT_CONTENT_FAILED:
            return {
                ...state,
                content: action.payload
            }
        case constant.GET_PROJECT_CONTENT_SUCCESS:
            return {
                ...state,
                content: action.payload
            }
        case constant.GET_PROJECT_CONTENT_FAILED:
            return {
                ...state,
                fail: action.payload
            }
        default:
            return state;
    }
}