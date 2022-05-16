import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const DropDown = ({ labelName,  items , method}) => {
    return <div className='form-group'>
        <label>{labelName}</label>
        <select onChange ={method} className='form-control'>
            {
                items.map((item, index) => {
                    return <option key={index}>{item}</option>
                })
            }
        </select>
    </div>
}
export default DropDown;