import { css } from "styled-components";

const BodyM = css`
  color: hsl(var(--white));
  font-weight: 300;
  font-size: 15px;

  @media (max-width: 550px) {
    font-size: 12px;
    letter-spacing: 0;
    line-height: 1;
  }
`;

const BodyS = css`
  font-weight: 300;
  font-size: 13px;

  @media (max-width: 550px) {
    font-size: 11px;
    letter-spacing: 0;
    line-height: 1;
  }
`;

export { BodyM, BodyS };
