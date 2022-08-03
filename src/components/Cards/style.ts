import styled, { css } from "styled-components";

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