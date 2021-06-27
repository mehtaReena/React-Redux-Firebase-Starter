import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployees } from '../redux/actions/employeeAction'
import EmployeeCard from './EmployeeCard'
import { Link } from  "react-router-dom";

function CompanyDetails(props) {

    let company = props.match.params.name
    let companyobj = props.location.myCustomProps;
    console.log(" companyobj:", companyobj)

    let dispatch = useDispatch();

    let employeeState = useSelector(state => state.employeeState)
    console.log("employeeState    ", employeeState)
    useEffect(() => {
        dispatch(fetchEmployees(company))
        // eslint-disable-next-line
    }, [])


    return (
        <div className="details-container">
            <Link to={'/'} className='link'><button className="overviewBtn" > Home </button>
            </Link>

            <div class="details-overview">
                <div className="company-name">
                    <p> <b> profile overview {company}</b></p>
                </div>
                <div className="company-info">
                    <div className="info">
                        <p> <b>Address  :</b>{companyobj.address}</p>
                        <p> <b>Revenue :</b> {companyobj.revenue}</p>
                        <p> <b>Phone  :</b>{companyobj.phone}</p>


                    </div>
                    <div className="total-emp">
                        Total Employees:
                        <div>{employeeState.employees.length}</div>

                    </div>
                </div>

            </div>
            <div className="employee-container">
                <div className="company-name">
                    <p> <b> Employees : {company}</b></p>
                </div>

                {employeeState.loading ? (
                    <h3>Loading . . .</h3>
                ) : (
                    <div className="details">
                        {employeeState.employees.map((item,idx) =>
                            <EmployeeCard
                                key={idx}
                                id={item.id}
                                name={item.name}
                                address={item.address}
                            />

                        )}
                    </div>

                )}


            </div>

        </div>
    );
}


export default CompanyDetails;