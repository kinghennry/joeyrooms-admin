import { combineReducers } from "redux";
import authReducer from "../reducers/auth.js";

//combining all the reducers in one and exporting for glabal accessibility
const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
