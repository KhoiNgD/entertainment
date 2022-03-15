import { BodyM } from "components/Typography";
import styled from "styled-components";

const Input = styled.input<{ error: string }>`
  ${BodyM}
  caret-color: hsl(var(--red));
  background: transparent;
  outline: none;
  border: none;
  border-bottom: 1px solid hsl(var(--grey));
  padding-right: ${(props) => (props.error ? `${props.error.length}ch` : "0")};
  padding-left: 16px;
  padding-bottom: 18px;

  &::placeholder {
    opacity: 0.5;
  }

  &:focus,
  &:active {
    border-bottom-color: currentColor;
  }

  &:invalid {
    border-bottom-color: hsl(var(--red));
  }
`;

export { Input };
