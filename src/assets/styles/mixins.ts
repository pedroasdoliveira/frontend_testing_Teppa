import { css } from "styled-components";
import { colors } from "./colors";
import { constants } from "./constant";

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
`;

const defaultButton = () => css`
  width: calc(100% - 50%);
  height: 45px;
  border: transparent;
  border-radius: 10px;
  background-color: ${colors.secondaryColor};
  color: ${colors.bodyColor};
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
`;

export const mixins = {
  titleStyle,
  bodyStyle,
  defaultButton,
};
