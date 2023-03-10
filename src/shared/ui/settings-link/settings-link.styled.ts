import styled from "styled-components";
import { NavLink as RouterLink } from "react-router-dom";

export const Link = styled(RouterLink)`
  &.nav-link {
    display: flex;
    height: 44px;
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
    justify-content: space-between;

    &:hover {
      background-color: ${({ theme }) => theme.colors.light_grey};
      color: ${({ theme }) => theme.colors.dark_main};
    }

    &.active {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;
