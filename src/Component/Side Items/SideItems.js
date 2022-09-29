import React from 'react';
import myPic from '../../img/received_775257023078460.jpeg'
import './SideItems.css'
const SideItems = (props) => {
    console.log(props);
    const { cartData } = props
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
                <div>
                    <h3>Add A break</h3>
                    <div className='sec-btn'>
                        <button>10s</button>
                        <button>20s</button>
                        <button>30s</button>
                        <button>40s</button>
                        <button>60s</button>
                    </div>
                </div>
                <div>
                    <h3>Activity Details</h3>
                    <div>Total time:{cartData}</div>
                </div>
            </div>
        </div>
    );
};

export default SideItems;