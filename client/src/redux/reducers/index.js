import { combineReducers } from "redux";
import { postReducer } from "./postReducer";
import { authReducer } from "./authReducer";

const reducers = combineReducers({
    posts: postReducer,
    user: authReducer,
});

export default reducers;
