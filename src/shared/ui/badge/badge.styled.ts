import styled from "styled-components";

export const BadgeContainer = styled.div`
  width: 44px;
  height: 44px;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const BadgeChildContainer = styled.div`
  position: relative;
  display: flex;

  .badge-dot {
    width: 10px;
    height: 10px;
    background-color: ${({ theme }) => theme.colors.red};
    outline: 2px solid ${({ theme }) => theme.colors.white};
    display: block;
    position: absolute;
    top: 0;
    inset-inline-end: 0;
    border-radius: 100%;
    z-index: 1;

  }
`;
