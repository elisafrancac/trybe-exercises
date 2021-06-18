import { combineReducers } from "redux";
import loginsReducer from './loginsReducer'
import clientsReducer from './clientsReducer'

export const rootReducer = combineReducers({
  loginsReducer,
  clientsReducer,
});
