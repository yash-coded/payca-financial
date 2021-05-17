import styled from "styled-components";
import { typography, space, color, border, layout } from "styled-system";

export const InputBox = styled.input`
  ${space}
  ${color}
  ${layout}
${border}
${typography}
border:none;
  background: #edeeef;
  border-radius: 0.8rem;
  display: block;
  outline: none;
  ${(props) =>
    props.error
      ? `
  border: 1px solid red;
  `
      : ""}

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${(props) => (props.error ? "#FF585D" : "")};
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${(props) => (props.error ? "#FF585D" : "")};
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: ${(props) => (props.error ? "#FF585D" : "")};
  }
  :focus {
    background: #f8f9f9;
    border: 1px solid ${(props) => (props.error ? "#FF585D" : "#009585")};
  }
`;
export const InputContainer = styled.div``;
