// @flow

import ReactDom from 'react-dom'
import * as React from 'react';
import { Modal } from './modal';

//todo: accept the portal id 
export function OverlayModal() {

  return (
    <>
      {ReactDom.createPortal(<Modal/>, (document as any).getElementById('generic-modal'))}
    </>
  );
};
  