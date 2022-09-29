import React from 'react';
import './TheData.css'


const TheData = (props) => {
    const { Name, img, info, time } = props.data
    return (
        <div className='cart'>
            <img className='data-img' src={img} alt="" />
            <h4>{Name}</h4>
            <small>{info}</small>
            <h6>Time-require:<span className='color-time'>{time} minute</span></h6>
            <a href="\">
                <div className='mk-btn'>
                    <h3><span>Add</span></h3>
                </div>
            </a>
        </div>
    );
};

export default TheData;