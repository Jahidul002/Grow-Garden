import { useState } from 'react';
import myPic from '../../img/received_775257023078460.jpeg'
import './SideItems.css'
const SideItems = (props) => {
    // console.log(props);
    const { cartData } = props
    const [brkTime, setBrkTime] = useState(0)
    let total = 0
    for (const data of cartData) {
        // console.log(data);
        total = total + data.time
    }

    const handleBrk = (e) => {
        const time = e.target.outerText
        setBrkTime(time)
        console.log(time);
    }

    return (
        <div className='sidebar'>
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
                        <button onClick={(e) => handleBrk(e)}>10</button>
                        <button onClick={(e) => handleBrk(e)}>20</button>
                        <button onClick={(e) => handleBrk(e)}>30</button>
                        <button onClick={(e) => handleBrk(e)}>40</button>
                        <button onClick={(e) => handleBrk(e)}>60</button>
                    </div>
                </div>
                <div>
                    <h3>Activity Details</h3>
                    <div>Total time:<span className='total-value'>{total}</span> Minute</div>
                    <div>Break time:<span className='total-value'>{brkTime}</span> Minute</div>
                </div>
            </div>
        </div>
    );
};

export default SideItems;