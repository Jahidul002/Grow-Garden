import React, { useEffect, useState } from 'react';
import TheData from '../TheData/TheData';

const AllData = () => {
    const [Alldata, setData] = useState([])
    useEffect(() => {
        fetch('fakeDB.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div className='container'>
            <div>
                {
                    Alldata.map(theData => <TheData key={theData.id} data={theData}></TheData>)
                }
            </div>
            <div>
                2
            </div>
        </div>
    );
};

export default AllData;