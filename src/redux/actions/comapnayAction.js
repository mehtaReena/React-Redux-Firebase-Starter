import * as  actions from './action-types'
// import app from "../store/firebaseConfig";
// import {database} from "../store/firebaseConfig"
import Firebase from "../firebaseConfig"

const database=Firebase.firestore()

export const fetchCompanyInprogress = () => ({
    type: actions.FETCH_COMPANY_INPROGRESS,
});

export const fetchCompanySuccess = (data) => ({
    type:actions.FETCH_COMPANY_SUCCESS,
    payload: data
});

export const fetchComapnyerror = (error) => ({
    type:actions.FETCH_COMPANY_ERROR,
    error: error
});


export const deleteCompanyInprogress = () => ({
    type: actions.DELETE_COMPANY_INPROGRESS,
});

export const deleteCompanySuccess = (data) => ({
    type:actions.DELETE_COMPANY_SUCCESS,
    payload: data
});

export const deleteComapnyerror = (error) => ({
    type:actions.FETCH_COMPANY_ERROR,
    error: error
});



export const fetchCompanies= () => {
    console.log(" fetchCompanies")
    return async function(dispatch) {
        try {
            dispatch(fetchCompanyInprogress());
            let getRequest = await database.collection("companies").get();
            let data = [];
            // console.log(" fetchMobiles" , getRequest)
            getRequest.docs.forEach((doc) =>
                data.push({...doc.data(),id:doc.id}));
            if(data) {
                   console.log("data " ,data)
                dispatch(fetchCompanySuccess(data));
            }
        }catch(err) {
            console.error(err.message);
            dispatch(fetchComapnyerror());
        }
    }

}


export const addCompany = (companyDetails) => {
    return async function(dispatch) {
        console.log("addCompany  ", companyDetails)
        try {
           await database.collection("companies").add(companyDetails)

        } catch (error) {
            console.error(error);
        }

    }
}


export const deleteFromDB = ( id) => {
    return async (dispatch)=> {
        console.log("companyDetails  delete  ", id)
        dispatch(deleteCompanyInprogress());
             database.collection("companies").doc(id).delete().then(()=>{
                dispatch(deleteCompanySuccess());
             dispatch(fetchCompanies("companies"))

             }).catch ((error) =>{
                dispatch(deleteComapnyerror());
            console.error("Error removing document: " ,error);
        })

    }
}

export const updateDB = (company) => {
    return async function(dispatch) {
        console.log("updateDB  ",company )
         try {
            database.collection("companies").doc(company.id).update(
               {
                phone:company.phone,
                address:company.address,
                revenue:company.revenue
            }
               ).then(()=>{
                dispatch(fetchCompanies("companies"))

               })


        } catch (error) {
            console.error(error);
        }

    }
}