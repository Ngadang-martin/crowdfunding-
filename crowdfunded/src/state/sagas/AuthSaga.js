import {call , put , takeEvery} from 'redux-saga/effects'

const apiUrl = "http://localhost:8080/api/users";

function getApi() {
    return fetch(apiUrl, {
        method: "GET",
        headers: {
            'Content-type': 'application/json'
        }
    }).then(response => response.json())
      .catch((error) => {throw error})
}

function* fetchUsers(action) {
    try {
        const users = yield call(getApi);
        yield put({type: 'GET_USERS_SUCCESS', accessToken: users});
    } catch (e) {
        yield put({type:'GET_USERS_FAILED', message: e.message});
    }
}

function* userSaga() {
    yield takeEvery('GET_USER_REQUESTED', fetchUsers)
}

export default userSaga