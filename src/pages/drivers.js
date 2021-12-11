import React from 'react'
import { useSelector } from 'react-redux'
import DriverCard from '../components/userCard'

function Drivers() {

    const drivers = useSelector((state) => state.drivers.drivers);

    const driverss = drivers.reverse();

    return (
        <div className = 'container'>
            <h1 className = "card-title text-center">Sürücülər</h1>
            
            <div className = 'd-flex justify-content-center flex-wrap'>

                {
                    driverss.map(driver => {
                        return (

                            <DriverCard user = {driver} key = {driver.id}/>
                        )
                    })
                }

            </div>

        </div>
    )
}

export default Drivers
