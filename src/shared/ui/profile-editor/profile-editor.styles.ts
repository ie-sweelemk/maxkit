import styled from "styled-components";

export const ProfileEditorWrapper = styled.div`
  display: flex;
`;

export const ProfileEditorContainer = styled.div`
  position: relative;
  display: flex;
  cursor: pointer;

  .icon {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    font-size: 18px;
    border-radius: ${({ theme }) => theme.borderRadius.m};
    box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.25);
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;