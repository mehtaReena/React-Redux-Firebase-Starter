import * as  actions from './action-types'
// import app from "../store/firebaseConfig";
// import {database} from "../store/firebaseConfig"
import Firebase from "../firebaseConfig"

const database=Firebase.firestore()

export const fetchEmployeeInprogress = () => ({
    type: actions.FETCH_EMPLOYEE_INPROGRESS,
});

export const fetchEmployeeSuccess = (data) => ({
    type:actions.FETCH_EMPLOYEE_SUCCESS,
    payload: data
});

export const fetchEmployeeError = (error) => ({
    type:actions.FETCH_EMPLOYEE_ERROR,
    error: error
});



export const fetchEmployees= (company) => {
    console.log(" fetchEmployees"   , company)
    return async function(dispatch) {
        try {
            dispatch(fetchEmployeeInprogress());
            const employeesRef = database.collection('employees');
            const snapshot = await employeesRef.where('employer', '==', company).get();
            if (snapshot.empty) {
                console.log('No matching documents.');
                dispatch(fetchEmployeeError());
                // return;
              }
            let data = [];
            // console.log(" fetchMobiles" , getRequest)
            snapshot.forEach((doc) =>
                data.push({...doc.data(),id:doc.id}));
            if(data) {
                   console.log("data " ,data)
                dispatch(fetchEmployeeSuccess(data));
            }
        }catch(err) {
            console.error(err.message);
            dispatch(fetchEmployeeError());
        }
    }

}


export const addEmployee = (empDetails) => {
    return async function(dispatch) {
        console.log("addEmployee  ", empDetails)
        try {
            database.collection("employees").add(

                empDetails)
        } catch (error) {
            console.error(error);
        }

    }
}


/* export const deleteFromDB = (category , id) => {
    return async (dispatch)=> {
        console.log("ProductDetails  delete  ", category , id)

             database.collection(category).doc(id).delete().then(()=>{
               dispatch(fetchMobiles(category))
             }).catch ((error) =>{
            console.error("Error removing document: " ,error);
        })

    }
}

export const updateProduct = (category, qty ,id) => {
    return async function(dispatch) {
        console.log("updateProduct  ", category , qty)
        try {
            database.collection(category).doc(id).update(
               {quantity:qty}
               )
        } catch (error) {
            console.error(error);
        }

    }
}*/