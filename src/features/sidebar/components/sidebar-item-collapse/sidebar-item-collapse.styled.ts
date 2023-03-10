import styled from "styled-components";
export const SidebarItemCollapseContainer = styled.div``;
export const SidebarItemCollapseButton = styled.div`
  height: 52px;
  text-decoration: none;
  font-size: ${({ theme }) => theme.font.fontSize.sm};
  color: ${({ theme }) => theme.colors.dark_grey};
  transition: background-color 0.3s ease, color 0.3s ease;
  border-radius: ${({ theme }) => theme.borderRadius.l};
  padding: 0 ${({ theme }) => theme.spacing.xl};
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: ${({ theme }) => theme.spacing.m};
  font-weight: 500;
  justify-content: space-between;

  &:hover {
    background-color: ${({ theme }) => theme.colors.light_grey};
    color: ${({ theme }) => theme.colors.dark_main};

    .link-icon, .button-chevron {
      color: ${({ theme }) => theme.colors.dark_main};
    }
  }

  &.active {
    color: ${({ theme }) => theme.colors.dark_main};
    .link-icon, .button-chevron {
      color: ${({ theme }) => theme.colors.dark_main};
    }
  }

  .link-icon {
    width: 24px;
    height: 24px;
    font-size: 24px;
    display: flex;
    margin-right: ${({ theme }) => theme.spacing.m};
    color: ${({ theme }) => theme.colors.neutral_grey};
    transition: color 0.3s ease;
  }

  .button-content {
    display: flex;
    align-items: center;
  }

  .button-chevron {
    color: ${({ theme }) => theme.colors.neutral_grey};
    transition: color 0.3s ease;
    display: flex;
    font-size: 20px;
  }
`;
