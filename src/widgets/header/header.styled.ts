import styled from "styled-components";

export const HeaderLeftSide = styled.div`
  display: flex;
  align-items: center;

  .btn .icon {
    font-size: 24px;
  }
`;

export const HeaderContainer = styled.div`
  height: 96px;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.spacing.xxl};

  @media screen and (min-width: 1181px) {
    border-left: 1px solid ${({ theme }) => theme.colors.neutral_bg};

    ${HeaderLeftSide} {
      .btn {
        display: none;
      }
    }
  }
`;

export const HeaderRightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 0 ${({ theme }) => theme.spacing.xl};
`;
