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

export const TitlePage = styled.h1`
  ${({ theme }) => css`
    ${theme.mixins.titleStyle}
    text-align: center;
    margin: 1.5rem 0;
  `}
`;

export const Description = styled.p`
    ${() => css`
        width: calc(100% - 60%);
        margin: .6rem 0;
        color: #f4f5f9;
        span {
            color: #000;
            font-style: italic;
        }
    `}
`
