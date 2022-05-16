import React from 'react';
import "./Popup.css";

const Popup = (props) => {
  return (
    <div className='popup-box' aria-hidden='true'>
      <div className='box'>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={props.onClose} >
          <span aria-hidden="true">&times; </span>
        </button>
        {props.children}
      </div>
    </div>
  )
}
export default Popup;