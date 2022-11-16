import {combineReducers} from "@reduxjs/toolkit";
import authReducer from "./features/auth-slice/auth-reducer";
import layoutReducer from "@app/store/features/layout-slice/layout-reducer";

const reducers = combineReducers({
  auth: authReducer,
  layout: layoutReducer
})

export default reducers