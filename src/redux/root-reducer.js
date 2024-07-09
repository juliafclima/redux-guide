import { cartReducer } from "./cart/reducer";
import { combineReducers } from "redux";
import { userReducer } from "./user/reducer";

const rootReducer = combineReducers({ userReducer, cartReducer });

export default rootReducer;
