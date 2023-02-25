import styled from "styled-components";

export const SigninFormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

export const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};

  .title {
    font-weight: 700;
    margin-bottom: ${({ theme }) => theme.spacing.s};
  }
  .subtitle {
    color: ${({ theme }) => theme.colors.dark_grey};
    font-size: ${({ theme }) => theme.font.fontSize.xs};
  }
`;

export const NewUserContainer = styled.div``