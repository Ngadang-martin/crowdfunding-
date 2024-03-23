import {all} from 'redux-saga/effects'
import userSaga from './AuthSaga'

export default function* rootSaga() {
    yield all([
        userSaga()
    ])
}