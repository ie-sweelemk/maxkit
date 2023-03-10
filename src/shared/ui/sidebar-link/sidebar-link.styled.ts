import styled from "styled-components";
import { NavLink as RouterLink } from "react-router-dom";

export const Link = styled(RouterLink)`
  &.nav-link {
    display: flex;
    height: 52px;
    text-decoration: none;
    font-size: ${({ theme }) => theme.font.fontSize.sm};
    color: ${({ theme }) => theme.colors.dark_grey};
    transition: background-color 0.3s ease, color 0.3s ease;
    border-radius: ${({ theme }) => theme.borderRadius.l};
    padding: 0 ${({ theme }) => theme.spacing.xl};
    display: flex;
    align-items: center;
    margin-bottom: ${({ theme }) => theme.spacing.m};
    font-weight: 500;
    align-items: center;

    &:hover,
    &.active {
      background-color: ${({ theme }) => theme.colors.light_grey};
      color: ${({ theme }) => theme.colors.dark_main};

      .link-icon {
        color: ${({ theme }) => theme.colors.dark_main};
      }
    }

    &.sublink {
      height: 44px;
      color: ${({ theme }) => theme.colors.natural_black};
      padding: 0 62px;
      font-weight: 300;
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
  }
`;
