import { combineReducers } from 'redux'
import loginLogoutReducer from './loginLogoutReducer.js';
import dashboardReducer from './dashboardReducer.js';

const appReducer = combineReducers({
    loginLogoutReducer,
    dashboardReducer,
})
export default appReducer;