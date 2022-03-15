import { Input } from "components/Input";
import { BodyS } from "components/Typography";
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

const Error = styled.span`
  ${BodyS};
  color: hsl(var(--red));
  position: absolute;
  right: 0;
  top: 0;
`;

export { TextField };
