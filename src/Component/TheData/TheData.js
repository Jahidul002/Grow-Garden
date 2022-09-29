import React from 'react';
import './TheData.css'


const TheData = (props) => {
    const { Name, img, info, time } = props.data
    return (
        <div>
            <div>
                <img className='data-img' src={img} alt="" />
            </div>
            <div>
                <h4>{Name}</h4>
                <small>{info}</small>
                <h5>Time-require:<span className='color-time'>{time} minute</span></h5>
            </div>
        </div>
    );
};

export default TheData;