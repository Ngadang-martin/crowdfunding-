import api from '../api'
import * as constant from '../constant'
const addProjectBasic = (basicsData) => async (dispatch) => {
    try {
        const {data} = await api.projectBasic(basicsData)
        dispatch({type: constant.PROJECT_BASICS_SUCCESS, payload:data })
        // window.location.href="/reward"
    } catch (error) {
        dispatch({type: constant.PROJECT_BASICS_FAILED, payload: error})
    }
}

const addProjectReward = (rewardData) => async (dispatch) => {
    try {
        const {data} = await api.projectReward(rewardData)
        dispatch({type: constant.ADD_PROJECT_REWARD, payload:data })
        // window.location.reload()
    } catch (error) {
        dispatch({type: constant.FAIL_PROJECT_REWARD, payload: error})
    }
}

const updateTeam = (id, teamData) => async(dispatch) => {
    try {
        const {data} = await api.team(id, teamData)
        dispatch({type:constant.CREATE_TEAM_SUCCESS, payload: data})
    }catch (error) {
        dispatch({ type:constant.FAIL_CREATE_TEAM, payload: error})
      
    }
}

const addProjectFunding = (id, teamData) => async(dispatch) => {
    try {
        const {data} = await api.projectFunding(id, teamData)
        dispatch({type:constant.CREATE_PROJECT_FUNDING_SUCCESS, payload: data})
    }catch (error) {
        dispatch({ type:constant.CREATE_PROJECT_FUNDING_FAILED, payload: error})
    }
}

const getProjectReward = (id) => async (dispatch) => {
    try {
        const {data} = await api.getProjectReward(id)
        dispatch({type: constant.GET_PROJECT_REWARD_SUCCESS, payload: data})
    } catch (error) {
        dispatch({ type: constant.GET_PROJECT_REWARD_FAILED, payload: error})
    }
}

const editProjectReward = (id, Editdata) => async (dispatch) => {
    try {
        const {data} = await api.updatereward(id,Editdata)
        dispatch({type: constant.EDIT_PROJECT_REWARD_SUCCESS, payload: data})
        window.location.reload();
    } catch (error) {
        dispatch({ type: constant.EDIT_PROJECT_REWARD_SUCCESS, payload: error})
    }
}
const getUserProject = (id) => async (dispatch) => {
    try {
        const {data} = await api.getUserProject(id);
        dispatch({type: constant.GET_PROJECT_SUCCESS, payload: data})
    } catch (error) {
        dispatch({ type: constant.GET_PROJECT_FAILED, payload: error})
    }
}

const getProjectFunding = (id) => async (dispatch) => {
    try {
        const {data} = await api.getProjectFunding(id);
        dispatch({type: constant.GET_PROJECT_FUNDING_SUCCESS, payload: data})
    } catch (error) {
        dispatch({ type: constant.GET_PROJECT_FUNDING_FAILED, payload: error})
    }
}

const allProjectData = async (dispatch) => {
    try {
        const {data} = await api.completeProjectData()
        dispatch({type: constant.GET_COMPLETE_PEOJECT_SUCCESS, payload: data})
    } catch (e) {
        dispatch({ type: constant.GET_COMPLETE_PEOJECT_FAILED, payload: e})
    }
}

const SingleGetFundingAndProject = (id) => async (dispatch) => {
    try {
        const {data} = await api.SingleGetFundingAndProject(id)
        dispatch({type: constant.SINGLE_COMPLETE_PROJECT_SUCCESS, payload: data})
    } catch (error) {
        dispatch({ type: constant.SINGLE_COMPLETE_PROJECT_FAILED, payload: error})
    }
}

const addProjectContent = (id, contentData) => async (dispatch) => {
    try{
        const {data} = await api.insertProjectContent(id, contentData)
        dispatch({type: constant.INSERT_PROJECT_CONTENT_SUCCESS, payload: data})
    }catch (error) {
        dispatch({ type: constant.INSERT_PROJECT_CONTENT_FAILED, payload: error})
    }
}

const getProjectContent = (id) => async (dispatch) => {
    try {
        const {data} = await api.getProjectContent(id)
        dispatch({type: constant.GET_PROJECT_CONTENT_SUCCESS, payload: data})
    } catch (error) {
        dispatch({ type: constant.GET_PROJECT_CONTENT_FAILED, payload: error.message})
    }
}


export {
    addProjectBasic,
    addProjectReward, 
    updateTeam, addProjectFunding, 
    getProjectReward,editProjectReward,
    getUserProject,
    getProjectFunding,
    allProjectData,
    SingleGetFundingAndProject,
    addProjectContent,
    getProjectContent,
}