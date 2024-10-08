import AuthReducer from "./AuthReducer";
import {combineReducers} from "redux"
import ErrorsReducers from "./ErrorsReducers";

const rootReducer = combineReducers({AuthReducer,ErrorsReducers})

export default rootReducer