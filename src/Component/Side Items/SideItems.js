import React from 'react';
import myPic from '../../img/received_775257023078460.jpeg'
import './SideItems.css'
const SideItems = () => {
    return (
        <div>
            <div className='personal'>
                <div className='p-info'>
                    <img src={myPic} alt="" />
                    <div>
                        <h6>Jahidul Islam</h6>
                        <p>BrahmanBaria,<br />
                            Bangladesh</p>
                    </div>
                </div>
                <div className='info-div'>
                    <div className='w8'>
                        <h4>61kg</h4>
                        <p>Weight</p>
                    </div>
                    <div className='h8'>
                        <h4>5'5'' </h4>
                        <p>Height</p>
                    </div>
                    <div className='age'>
                        <h4>21 Years</h4>
                        <p>Age</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideItems;