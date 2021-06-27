import React from 'react';
import  { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addCompany,fetchCompanies } from '../redux/actions/comapnayAction'
import { ToastContainer, toast  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Company(props) {
    const inputRef = useRef({});
    let dispatch = useDispatch();

    const clickhandler = () => {
        const companyDetails = {
            name: inputRef.current["name"].value,
            address: inputRef.current["address"].value,
            revenue: inputRef.current["revenue"].value,
            phone :inputRef.current["phone"].value
        };

        console.log("ADD product .." , companyDetails)
         dispatch(addCompany(companyDetails));

          toast.success('successful')
         inputRef.current["name"].value="";
         inputRef.current["address"].value="";
        inputRef.current["revenue"].value="";
        inputRef.current["phone"].value="";
         dispatch(fetchCompanies())

        }

    return (


<div className='form-container'>

<div className='companyForm'>
    <h2 > Add new company </h2>
    <label >Name</label>
    <input type="text" name="name"
        ref={(el) => (inputRef.current["name"] = el)} />

    <label >Address :</label>
    <textarea type="text" name="address"
        ref={(el) => (inputRef.current["address"] = el)}
        rows="1"/>

    <label >Revenue</label>
    <input type="text" name="revenue"
        ref={(el) => (inputRef.current["revenue"] = el)} />

        <label >Phone</label>

    <input type="text" name="phone"
        ref={(el) => (inputRef.current["phone"] = el)} />




    <div>
        <button className="button" onClick={clickhandler}> ➕ save </button>
    </div>
    <ToastContainer position="top-center" autoClose={2000} />

</div>



        </div>
    );
}

export default Company;