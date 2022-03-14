import { BodyM } from "components/Typography/Bodies";
import styled from "styled-components";

const Button = styled.button`
  ${BodyM}
  padding: 14px 20px;
  background: hsl(var(--red));
  color: var(--white);
  border-radius: var(--radius);

  &:hover {
    background: hsl(var(--white));
    color: hsl(var(--semi-dark-blue));
  }
`;

export default Button;
