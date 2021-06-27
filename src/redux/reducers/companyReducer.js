import { FETCH_COMPANY_SUCCESS, FETCH_COMPANY_INPROGRESS, FETCH_COMPANY_ERROR,DELETE_COMPANY_ERROR,DELETE_COMPANY_INPROGRESS,DELETE_COMPANY_SUCCESS
 } from '../actions/action-types';

let initialState = {
    loading: false,
    error: null,
    companies: [],
    deleting:false

};

export default function companyReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_COMPANY_INPROGRESS:
            return { ...state, loading: true, deleting: false };
        case FETCH_COMPANY_SUCCESS:
            console.log("success")
            return { ...state, companies: action.payload,  deleting: false ,loading: false, error: null };
        case FETCH_COMPANY_ERROR:
            return { ...state, error: action.error };
        case DELETE_COMPANY_INPROGRESS:
            return { ...state, deleting: true };
        case DELETE_COMPANY_SUCCESS:
            console.log("success")
            return { ...state, deleting:false, loading: false, error: null };
        case DELETE_COMPANY_ERROR:
            return { ...state, error: action.error };

        default:
            return state;
    }
}
