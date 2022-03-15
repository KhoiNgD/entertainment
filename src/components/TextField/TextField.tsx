import { BodyM, BodyS } from "components/Typography";
import { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

function TextField({ error = "", ...props }: Props) {
  return (
    <Wrapper>
      <Input error={error} type="text" {...props} />
      <Error>{error}</Error>
    </Wrapper>
  );
}

const Wrapper = styled.label`
  position: relative;
`;

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

const Error = styled.span`
  ${BodyS};
  color: hsl(var(--red));
  position: absolute;
  right: 0;
  top: 0;
`;

export default TextField;
