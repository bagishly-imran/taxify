import React from 'react'
import { useSelector } from 'react-redux';
import DriverCard from '../components/userCard';

function Customer() {

    const customers = useSelector(state => state.customers.customers);

    const customs = customers.reverse();

    return (
        <div className = 'container'>
            <h1 className = "card-title text-center">Müştərilər</h1>
            
            <div className = 'd-flex justify-content-center flex-wrap'>

                {
                    customs.reverse().map(customer => {
                        return (

                            <DriverCard user = {customer} key = {customer.id}/>
                        )
                    })
                }

            </div>

        </div>
    )
}

export default Customer;
