import React, { useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';

type PortalProps = {
  children: React.ReactElement;
}

const modalRoot = document.getElementById('modal-root') as HTMLElement;

const Portal: React.FC<PortalProps> = ({children}) => {
  const container = useMemo(() => document.createElement('div'), []);
  useEffect(() => {
    modalRoot.appendChild(container)
    return () => {
      modalRoot.removeChild(container)
    }
    // eslint-disable-next-line
  }, []);
  return ReactDOM.createPortal(children, container);
}

export default Portal;
