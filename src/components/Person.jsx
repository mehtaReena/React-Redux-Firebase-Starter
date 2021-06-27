import React, { useState } from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addEmployee } from '../redux/actions/employeeAction';
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Person(props) {
    const inputRef = useRef({});
    let companyState = useSelector(state => state.companyState)
    let  dispatch =useDispatch();
    const [selectValue, setSelectValue] = useState('');




    const clickhandler = () => {
        const empDetails = {
            name: inputRef.current["name"].value,
            address: inputRef.current["address"].value,
            employer: inputRef.current["employer"].value,

        };

        console.log("ADD product .." , empDetails)
         dispatch(addEmployee(empDetails));
         toast.success('successful')
           inputRef.current["name"].value="";
           inputRef.current["address"].value="";
          inputRef.current["employer"].value="";

        }


    return (

        <div className='companyForm'>
            <h2 > Add new employee </h2>
            <label >Name</label>
            <input type="text" name="name"
                ref={(el) => (inputRef.current["name"] = el)} />

            <label >Address :</label>
            <textarea type="text" name="address"
                ref={(el) => (inputRef.current["address"] = el)}
                rows="3" cols="40" />

            <select className="employer" name="employer" ref={(el) => (inputRef.current["employer"] = el)}
            onChange={(e) => setSelectValue(e.target.value)} defaultValue={selectValue}>
            <option value="" disabled  hidden>Employer...</option>
                {companyState.companies.map((item ,idx) =>
                  <option key ={idx} value={item.name}>{item.name}</option>
                )}

            </select>




            <div>
                <button className="button" onClick={clickhandler}> ➕ save </button>
            </div>

            <ToastContainer position="top-center" autoClose={2000} />
        </div>
    );
}

export default Person;