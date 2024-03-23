import api from '../api'
import * as  constant from '../constant'

// const loginUser = (user) => {
//     console.log("use");
//     console.log(user);
//     return {
//         type: constant.GET_USER_REQUESTED,
//         payload: user
//     }
// }

const loginUser = (user) => async(dispatch) =>{
   try {
       const {data} = await api.loginUser(user);
       dispatch({type: constant.GET_LOGIN_SUCCESS, payload:data})
       window.localStorage.setItem('access_token', data.access_token)
       window.localStorage.setItem('refresh_token', data.refresh_token)
       window.localStorage.setItem('id', data.id)
       console.log(data);
       window.location.href="/dashboard"
   } catch (error) {
       dispatch({type: constant.GET_LOGIN_FAILED, payload: error})
       console.log(error);
   }
}

const registerUser = (user) => async (dispatch) => {
    try {
        const {data} = await api.register(user);
        // dispatch({type: constant.REGISTER_SUCCESS, payload: data})
        if (data.status === 201) {  
         dispatch({type: constant.REGISTER_SUCCESS, payload: data})
         window.location.href = "/signin"
        }
        if (data.status === 400) {
            return dispatch({type: constant.REGISTER_SUCCESS, payload: data}) 
        }
    } catch (error) {
        dispatch({type: constant.REGISTER_FAILED, payload: error})
    }
}

const getUser = (id) => async (dispatch) => {
    try {
        const {data} = await api.userInfo(id)
        dispatch({type: constant.GET_USER_INFO_SUCCESS , payload: data})
    } catch (error) {
        dispatch({type: constant.GET_USER_INFO_FAILED, payload: error})
    }
}


export {loginUser, registerUser, getUser}