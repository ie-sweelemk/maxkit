import styled from 'styled-components';

export const ModalStyled = styled.div`
  background-color: #FFFFFF;
  padding: ${({theme}) => theme.spacing.xl};
  display: flex;
  flex-direction: column;
  flex-basis: 470px;
  max-width: 470px;
  border-radius: ${({theme}) => theme.borderRadius.m};
  position: relative;
`;
export const ModalHeader = styled.div`
  margin-bottom: 24px;
  
  .modal-title {
    font-weight: 500;
    font-size: 24px;
  }
  
  .modal-subtitle {
    font-size: 14px;
    color: ${({theme}) => theme.colors.dark_grey};
  }
  
  .modal-close {
    position: absolute;
    top: 16px;
    right: 16px;
    
    .icon {
      font-size: 20px; 
    }
  }
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px
`;
