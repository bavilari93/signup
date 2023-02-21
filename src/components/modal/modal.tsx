// @flow
import * as React from 'react';
import { useAppDispatch, useAppSelector } from 'redux/store';
import {hideModal} from 'redux/slices/common'
export function Modal() {
const dispatch = useAppDispatch();

const {
  common: { modalData},
} = useAppSelector((state) => state);

const {  
messageTitle,
message,
displayButton,
internalRedirect,
redirectLink,} = modalData

  return (
    <div className='modal-wrapper'>
      <div className="modal-content">
          <h1>{messageTitle}</h1>
          <p>{message}</p>
          <button onClick={()=>{dispatch(hideModal())}}>close</button>
      </div>
      
    </div>
  );
};