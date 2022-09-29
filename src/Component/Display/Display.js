import React, { useEffect, useState } from 'react';
import SideItems from '../Side Items/SideItems';
import TheData from '../The Data/TheData';
import './Display.css'
const Display = () => {
    const [alldata, setData] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('fakeDB.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])


    const addToCart = (theData) => {
        // console.log(theData);
        const newCart = [...cart, theData]
        setCart(newCart)
    }


    return (
        <div className='container'>
            <div className='data-cart'>
                {
                    alldata.map(theData => <TheData
                        key={theData.id}
                        data={theData}
                        addToCart={addToCart}
                    ></TheData>)
                }

            </div>
            <div className='info-cart'>
                <SideItems cartData={cart}></SideItems>
            </div>
        </div>
    );
};

export default Display;