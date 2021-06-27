import { combineReducers } from "redux";
import  companyReducer  from "./companyReducer";
import  employeeReducer  from "./employeeReducer.js"

const rootReducer = combineReducers({
    companyState: companyReducer,
    employeeState:employeeReducer,

});

export default rootReducer;