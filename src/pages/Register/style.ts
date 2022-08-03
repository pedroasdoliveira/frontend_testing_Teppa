import styled, { css } from "styled-components";

export const MainPage = styled.main`
  ${({ theme }) => css`
    background-color: ${theme.colors.primaryColor};
    min-width: 100vw;
    min-height: 100vh;
    text-align: center;
    ${theme.mixins.bodyStyle}
    display: grid;
    justify-content: center;
    align-items: center;
  `}
`;

