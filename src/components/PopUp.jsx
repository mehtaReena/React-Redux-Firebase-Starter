import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateDB } from '../redux/actions/comapnayAction'

function PopUp({ visible, selected, setVisible }) {
    let companyState = useSelector(state => state.companyState)
    let company = companyState.companies[selected];
    console.log(" edit " , company)
    let [revenue ,setRevenue] =useState(0)
    let [address ,setaddress] =useState("")
    let [phone ,setPhone] =useState(0)
    const revenueRef = useRef(0);

    const addRef = useRef();
    const phoneRef = useRef();
    let dispatch = useDispatch();


    const onChange=()=>{
        setRevenue(revenueRef.current.value)
        setPhone(phoneRef.current.value);
        setaddress(addRef.current.value)

    }



    let closeDialogBox = () => {

        setVisible(false)

    }
    const updateCompany = () => {
        const companyDetails = {
            id:company.id,
            revenue: revenueRef.current.value,
            address: addRef.current.value,
            phone: phoneRef.current.value,

        };

       dispatch(updateDB(companyDetails))
       setVisible(false)

    }

    useEffect(() => {
        if (!visible) {
            closeDialogBox()

        }
        else{
            setRevenue(company.revenue);
            setaddress(company.address);
            setPhone(company.phone);

        }
        // eslint-disable-next-line
    }, [visible])

    return (
        <>
            {visible && <div className="pop-up">
                <div className="dialog-box">
                    <div className="dialog-box-header">
                        <p>{company.name}</p>
                        <p className='close' onClick={closeDialogBox}>close</p>
                    </div>

                    <div className="dialog-box-body">


                            <h2 > Update company </h2>

                            <label >Address :</label>
                            <textarea type="text" name="address" value={address}
                                ref={addRef}
                                rows="3"
                                onChange={(value) => onChange(value)} />
                                <div className="row">

                            <label >Revenue</label>
                            <input type="number" name="revenue" value={revenue}
                                ref={revenueRef}
                                onChange={(value) => onChange(value)} />

                            <label >Phone</label>

                            <input type="text" name="phone" value={phone}
                                ref={phoneRef}
                                onChange={(value) => onChange(value)} />
                             </div>




                    </div>
                    <button className='transaction-type' onClick={updateCompany}>Update</button>
                </div>


            </div>}
        </>
    );
}

export default PopUp;