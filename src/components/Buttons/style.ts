import styled, { css } from "styled-components";

export const ButtonLog = styled.button`
    ${({theme}) => css`
        ${theme.mixins.defaultButton}
    `}
`