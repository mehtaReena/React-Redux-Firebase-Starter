import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCompanies } from '../redux/actions/comapnayAction'
import CompanyCard from './CompanyCard';
import  PopUp from './PopUp';


function Companies(props) {
    let dispatch = useDispatch();
    let [visible, setVisible] = useState(false)
    let [selected, setSelected] = useState(0)


    let companyState = useSelector(state => state.companyState)
    console.log("companyState    ", companyState)



    useEffect(() => {
        dispatch(fetchCompanies())
        // eslint-disable-next-line
    }, [])

    let getCompanyId = (id) => {
        setSelected(id)
        setVisible(true)
    }


    return (
        <div>

            {companyState.loading ? (
                <h3>Loading . . .</h3>
            ) : (
                <div className="details">
                    {companyState.companies.map((item, idx) =>
                        <CompanyCard
                            key={idx}
                            index={idx}
                            id={item.id}
                            name={item.name}
                            address={item.address}
                            phone={item.phone}
                            revenue={item.revenue}
                            method={getCompanyId}

                        />

                    )}
                </div>

            )}

            <PopUp visible={visible} selected={selected} setVisible={setVisible} />


        </div>
    );
}

export default Companies;