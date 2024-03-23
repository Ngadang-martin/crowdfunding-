import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import projectReducer from "./ProjectReducer";
import categoryReducer from "./CategoryReducer";


const rootReducer = combineReducers({
    authReducer,
    projectReducer,
    categoryReducer,
}
)

export default rootReducer
