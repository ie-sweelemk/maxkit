import styled from "styled-components";

export const NestedLoader = styled.div`
  position: relative;

  .spin-container {
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    z-index: 4;
    display: flex;
    width: 100%;
    height: 100%;
    max-height: 400px;
    align-items: center;
    justify-content: center;

    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .tip-text {
      margin-top: 4px;
      font-size: ${({theme}) => theme.font.fontSize.xs};
    }
  }

  .spin {
    width: 24px;
    height: 24px;
    font-size: 24px;
    display: flex;
    color: ${({ theme }) => theme.colors.primary};
  }

  .container {
    &.spinning-blur {
      clear: both;
      opacity: 0.5;
      user-select: none;
      pointer-events: none;
    }
  }
`;
