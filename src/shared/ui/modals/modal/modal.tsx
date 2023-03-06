import React from 'react';
import ModalOverlay from '../modal-overlay/modal-overlay';
import { ModalStyled, ModalHeader, ModalBody } from './model.styled';
import { Button } from '../../button';
import Icons from '../../icons';

type ModalType = {
  children: React.ReactElement | React.ReactElement[];
  isOpened: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
}

const Modal: React.FC<ModalType> = ({children, isOpened, onClose , title,subtitle}) => {
  return (
    <ModalOverlay isOpened={isOpened}>
      <ModalStyled>
        <ModalHeader>
          { title ? (<div className='modal-title'>{title}</div>) : null }
          { subtitle ? (<div className='modal-subtitle'>{subtitle}</div>) : null }
          <div className='modal-close'>
            <Button prefix={<Icons name='close' />} onClick={onClose} variant='text' onlyIcon />
          </div>
        </ModalHeader>
        <ModalBody>
          {children}
        </ModalBody>
      </ModalStyled>
    </ModalOverlay>
  )
}

export default Modal;
