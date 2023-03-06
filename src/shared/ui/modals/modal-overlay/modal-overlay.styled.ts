import styled from 'styled-components';

export const ModalContainerStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  
  box-sizing: border-box;
  padding: 24px;
  z-index: 2;
`;
export const ModalOverlayStyled = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;
