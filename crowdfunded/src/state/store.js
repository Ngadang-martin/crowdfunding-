import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from './reducers/index'
import thunk from 'redux-thunk'



const store = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
) (createStore)(rootReducer)


export default store 