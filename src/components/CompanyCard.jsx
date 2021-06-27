import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { deleteFromDB } from '../redux/actions/comapnayAction'

function CompanyCard(props) {

    let [selected, setSelected] = useState(0)
    let dispatch = useDispatch();
    let companyState = useSelector(state => state.companyState)
    // console.log("companyState    ", companyState)

    let company = {
        address: props.address,
        revenue: props.revenue,
        phone: props.phone

    }
    const deleteCompany = (e) => {
        let id = e.target.value;

        dispatch(deleteFromDB(id))


    }
    const editCompany = (e) => {
        props.method(props.index)
    }


    let clickHandler = () => {
        setSelected(props.index);
    }


    return (
        <div className='card' onClick={clickHandler}>
            <div className="company-name">
                <p > <b>{props.name}</b></p>
                <div className="actions">
                {companyState.deleting && selected === props.index ? <h3>Deleteing...</h3> :
                    <button className="button" value={props.id} onClick={deleteCompany}>🗑️ Delete</button>
                }
                <button className="button" value={props.id} onClick={editCompany}> ✔️ Edit</button>
            </div>
            </div>
            <div className="cardInfo">

                <p> <b>Address  :</b>{props.address}</p>
                <p> <b>Revenue :</b> {props.revenue}</p>
                <p> <b>Phone  :</b>{props.phone}</p>

            </div>
            <div className="bottom-border">
                <Link to=
                    {
                        {
                            pathname: "/companyDetails/" + props.name,
                            myCustomProps: company
                        }
                    }>



                    <button className="overviewBtn" > Company Overview</button></Link>
            </div>



        </div>
    );
}

export default CompanyCard;