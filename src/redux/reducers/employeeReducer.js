import { FETCH_EMPLOYEE_SUCCESS, FETCH_EMPLOYEE_INPROGRESS, FETCH_EMPLOYEE_ERROR} from '../actions/action-types';

let initialState = {
    loading: false,
    error: null,
    employees: [],

};

export default function employeeReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_EMPLOYEE_INPROGRESS:
            return { ...state, loading: true };
        case FETCH_EMPLOYEE_SUCCESS:
            console.log("success")
            return { ...state, employees:action.payload, loading: false , error:null};
        case FETCH_EMPLOYEE_ERROR:
            return { ...state, error: action.error ,loading: false };

            default:
                return state;
    }
}
