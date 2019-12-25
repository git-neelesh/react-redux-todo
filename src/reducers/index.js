import { combineReducers } from 'redux';
import accountingReducer from './accountingReducer';
import claimsHistoryReducer from './claimsHistoryReducer';
import policiesReducer from './policiesReducer';
import todoReducer from "./todoReducer";

export default combineReducers({
  accounting: accountingReducer,
  claimsHistory: claimsHistoryReducer,
  policies: policiesReducer,
  todos: todoReducer
});
