import styled, {keyframes} from 'styled-components';

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
`

export const LoaderStyled = styled.div`
  display: flex;
  animation: ${spinAnimation} 1.3s infinite linear;
`
