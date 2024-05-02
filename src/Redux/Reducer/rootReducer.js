import { combineReducers } from "@reduxjs/toolkit";
// import { crudReducers } from "./crudReducer";
import postReducer from "./postSlice";

const rootReducer = combineReducers({
    // user: crudReducers,
    posts: postReducer
})

export default rootReducer;

