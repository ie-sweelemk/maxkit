import styled from "styled-components";

export const HeadingContainer = styled.div`
  display: flex;
  margin-bottom: ${({theme}) => theme.spacing.xxl};
`;
export const HeadingWrapper = styled.div`
  flex: 1;
`;
export const HeadingTitle = styled.div`
  font-size: ${({ theme }) => theme.font.fontSize.xxl};
  font-weight: 500;
`;
export const HeadingSubtitle = styled.div`
font-size: ${({ theme }) => theme.font.fontSize.sm};
  margin-top: ${({theme}) => theme.spacing.s};
  color: ${({theme}) => theme.colors.dark_grey};
`;
export const HeadingAction = styled.div``;
