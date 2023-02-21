import React from 'react';
import { LayoutProps } from 'models/layouts';
import { OverlayModal } from 'components/modal/overlay-modal';
import { useAppSelector } from 'redux/store';


// this wrapper will handle general page styling 
const GeneralPagesLayout : React.FC<LayoutProps> = ({ children }) => {
  const {
    common: { showModal },
  } = useAppSelector((state) => state);
  
  return (
    <div>
        {children}
        {showModal &&<OverlayModal/> }
    </div>
  )
}

export default GeneralPagesLayout;