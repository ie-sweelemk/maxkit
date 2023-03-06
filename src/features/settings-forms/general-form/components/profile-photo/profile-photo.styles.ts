import styled from "styled-components";

export const ProfilePhotoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  .form-label {
    display: inline-flex;
    font-size: ${({ theme }) => theme.font.fontSize.sm};
    font-weight: 500;
    margin-bottom: ${({ theme }) => theme.spacing.m};
  }
`;
