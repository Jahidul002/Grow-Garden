import React from 'react';
import './TheData.css'


const TheData = (props) => {
    const { Name, img, info, time } = props.data;
    const { addToCart } = props
    // console.log(props);
    return (
        <div className='cart'>
            <img className='data-img' src={img} alt="" />
            <h4>{Name}</h4>
            <small>{info}</small>
            <h6>Time-require:<span className='color-time'>{time} minute</span></h6>
            <button onClick={() => addToCart(props.data)} className='btn'>
                <p>Add cart</p>
            </button>
        </div>
    );
};

export default TheData;