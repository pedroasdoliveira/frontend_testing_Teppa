import {css} from 'styled-components'
import { colors } from './colors'
import { constants } from './constant'

const titleStyle = () => css`
    font-family: ${constants.titleFont};
    font-size: ${constants.titleFontSize};
    font-weight: ${constants.titleFontWeight};
`;

const bodyStyle = () => css`
    font-family: ${constants.bodyFont};
    font-size: ${constants.bodyFontSize};
    font-weight: ${constants.bodyFontWeight};
    line-height: ${constants.bodyLine};
`

export const mixins = {
    titleStyle,
    bodyStyle,
}