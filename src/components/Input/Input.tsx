import { BodyM } from "components/Typography";
import styled from "styled-components";

const Input = styled.input<{ error?: string }>`
  ${BodyM}
  caret-color: hsl(var(--red));
  background: transparent;
  outline: none;
  border: none;
  box-shadow: 0 1px 0 hsl(var(--grey));
  padding-right: ${(props) => (props.error ? `${props.error.length}ch` : "0")};
  padding-left: 16px;
  padding-bottom: 18px;

  &::placeholder {
    opacity: 0.5;
  }

  &:focus,
  &:active {
    box-shadow: 0 1px 0 currentColor;
  }

  &:invalid {
    box-shadow: 0 1px 0 hsl(var(--red));
  }
`;

export { Input };
