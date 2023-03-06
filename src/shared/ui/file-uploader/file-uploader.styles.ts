import styled from "styled-components";

export const FileUploaderContainer = styled.div`
  width: 100%;
  height: 300px;
  margin-bottom: 24px;
  .dropzone {
    height: 100%;
    cursor: pointer;
    overflow: hidden;
    outline: none !important;
    border: none !important;

    & > div {
      overflow: hidden;
      outline: none !important;
    }

    .rectangle {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 300px;
      margin: 0px auto;
      text-align: center;
      padding: 24px;
      transition: background 200ms;
      border: 1px solid ${({ theme }) => theme.colors.neutral_grey};
      color: ${({ theme }) => theme.colors.neutral_grey};
      border-radius: ${({ theme }) => theme.borderRadius.m};
    }

    .rectangle-body {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .icon {
        font-size: 24px;
      }
    }

    &:hover {
      .rectangle {
      }
    }
  }
`;
