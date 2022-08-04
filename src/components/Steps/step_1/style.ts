import styled, { css } from "styled-components";

export const Form = styled.form`
  ${() => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}
`;

export const InfoForm = styled.h2`
    ${({theme}) => css`
        ${theme.mixins.titleStyle}
        font-size: 1.5rem;
        text-align: center;
        margin: 1rem 0;
    `}
`

export const Input = styled.input`
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
