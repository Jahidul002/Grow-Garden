import React from 'react';
import logo from '../../img/logo.png'
import './Navber.css'
const Navber = () => {
    return (
        <nav className='navber'>
            <img src={logo} alt="" />
            <h2>Grow Garden</h2>
        </nav>
    );
};

export default Navber;