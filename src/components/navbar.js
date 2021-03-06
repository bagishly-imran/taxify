import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className = 'bg-light bg-gradient'>

            <div className = 'navbar justify-content-center container'>
                <Link to ="/taxify/" className="nav-btn btn btn-outline-secondary m-1">Əsas Səhifə</Link>
                <Link to = '/customers' className="nav-btn btn btn-outline-secondary m-1">Müştəri seç</Link>
                <Link to = '/drivers' className="nav-btn btn btn-outline-secondary m-1">Sürücü seç</Link>
                <Link to = '/add' className="nav-btn btn btn-outline-secondary m-1">Əlavə et</Link>
            </div>

        </div>
    )
}

export default Navbar;
