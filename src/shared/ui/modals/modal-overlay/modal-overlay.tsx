import React from 'react';
import { Portal } from '../portal';
import { ModalContainerStyled, ModalOverlayStyled } from './modal-overlay.styled';

type ModalOverlayProps = {
  children: React.ReactElement;
  isOpened: boolean;
}

const ModalOverlay: React.FC<ModalOverlayProps> = ({children, isOpened}) => {
  if (!isOpened) {
    return null;
  }
  return (
    <Portal>
      <ModalContainerStyled>
        <ModalOverlayStyled>
          {children}
        </ModalOverlayStyled>
      </ModalContainerStyled>
    </Portal>
  )
}

export default ModalOverlay;
