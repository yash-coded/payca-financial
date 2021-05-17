import styled from "styled-components";
import { space, layout } from "styled-system";

export const LinkText = styled.a`
  ${space}
  ${layout}
  /* display:block; */
  color: #3187f7;
  cursor: pointer;
  :hover {
    color: #4a97fd;
  }
`;
