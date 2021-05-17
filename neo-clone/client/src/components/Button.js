import styled from "styled-components";
import {
  space,
  layout,
  border,
  shadow,
  color,
  typography,
} from "styled-system";

export const Button = styled.button`
  cursor: pointer;
  border: none;
  background: rgb(5, 28, 44);
  :hover {
    background: #1e3342;
  }
  color: white;
  ${space}
  ${layout}
 ${border}
  ${shadow}
  ${color}
  ${typography}
`;
