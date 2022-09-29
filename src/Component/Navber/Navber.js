import React from 'react';
import logo from '../../img/logo.png'
import './Navber.css'
const Navber = () => {
    return (
        <nav className='navber'>
            <div className='logo'>
                <img src={logo} alt="" />
                <h2>Grow Garden</h2>
            </div>
            <div>
                <a href="">Blog</a>
            </div>
        </nav>
    );
};

export default Navber;