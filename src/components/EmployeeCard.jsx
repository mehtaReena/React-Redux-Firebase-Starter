import React from 'react';

function EmployeeCard(props) {
    return (
        <div>
            <div className="employee-card">

            <div className="company-name">
                    <p> <b>  {props.name}</b></p>
                </div>
                <div className="company-info">
                <p> <b>Address :</b> {props.address}</p>
                </div>

            </div>

        </div>
    );
}

export default EmployeeCard;