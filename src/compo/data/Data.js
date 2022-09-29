import React from 'react';
import './Data.css'

const Data = (props) => {
    console.log(props.pass);
    const { Name, img, time, info } = props.pass
    return (
        <div className='data-info'>
            <img className='data-img' src={img} alt="" />
            <div>
                <h4>{Name}</h4>
                <p><small>{info}</small></p>
                <h6>Time-require:{time} minute</h6>
            </div>
        </div>
    );
};

export default Data;