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

export const LoginForm = styled.form`
  ${() => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}
`;

export const LoginInput = styled.input`
  ${({ theme }) => css`
    ${theme.mixins.bodyStyle}
    width: 395px;
    height: 40px;
    border-radius: 15px;
    background-color: ${theme.colors.bodyColorInput};
    color: #000;
    border: 1px solid #000;
    outline: none;
    margin-bottom: 1rem;
    padding: 0 .5rem;
  `}
`;
export const RegisterUser = styled.p`
  ${({ theme }) => css`
    ${theme.mixins.bodyStyle}
    padding: 1rem;
    strong {
      cursor: pointer;
      color: ${theme.colors.primaryColor};
      :hover {
        text-decoration: underline;
      }
    }
  `}
`;
