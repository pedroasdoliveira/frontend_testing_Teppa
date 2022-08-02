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

export const CardPage = styled.section`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${theme.colors.cards};
    border-radius: 15px;
    width: 50vw;
    height: 45vh;
  `}
`;

export const TitlePage = styled.h1`
  ${({ theme }) => css`
    ${theme.mixins.titleStyle}
    text-align: center;
    margin: 1rem 0;
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

export const ButtonLog = styled.button`
  ${({ theme }) => css`
    width: calc(100% - 50%);
    height: 45px;
    border: transparent;
    border-radius: 10px;
    background-color: ${theme.colors.secondaryColor};
    color: ${theme.colors.bodyColor};
    box-shadow: 4px 4px 10px 1.5px rgba(0, 0, 0, 0.25);
    font-weight: 700;
    font-size: 1.2rem;
    text-align: center;
    margin: 1rem 0;
    cursor: pointer;
    transition: all ease-in-out 0.6s;
    :hover {
      transform: scale(1.1);
      color: #f4f5f9;
    }
  `}
`;
