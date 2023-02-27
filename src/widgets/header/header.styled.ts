import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 96px;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  padding: 0 ${({ theme }) => theme.spacing.xxl};

  .btn .icon {
    font-size: 24px;
  }

  @media screen and (min-width: 1181px) {
    border-left: 1px solid ${({ theme }) => theme.colors.neutral_bg};

    .btn {
      display: none;
    }
  }
`;

export const HeaderLeftSide = styled.div`
  display: flex;
  align-items: center;
`;
export const HeaderRightSide = styled.div``;
