import React from 'react';
import Data from '../data/Data';
import './TheData.css'
const TheData = (props) => {
    console.log(props.data);
    const { Name, img, time, info } = props.data
    return (
        <div>
            <div className='data-cont'>
                <div>
                    <Data pass={props.data}></Data>
                </div>
                <div>
                    2
                </div>
            </div>
        </div>
    );
};

export default TheData;