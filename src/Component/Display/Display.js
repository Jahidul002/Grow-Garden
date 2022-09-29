import React, { useEffect, useState } from 'react';
import SideItems from '../Side Items/SideItems';
import TheData from '../The Data/TheData';
import './Display.css'
const Display = () => {
    const [alldata, setData] = useState([])

    useEffect(() => {
        fetch('fakeDB.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div className='container'>
            <div className='data-cart'>
                {
                    alldata.map(theData => <TheData key={theData.id} data={theData}></TheData>)
                }
                {
                    alldata.map(theData => console.log(theData))
                }
            </div>
            <div className='info-cart'>
                <SideItems></SideItems>
            </div>
        </div>
    );
};

export default Display;