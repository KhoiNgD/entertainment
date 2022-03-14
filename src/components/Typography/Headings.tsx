import styled, { css } from "styled-components";

const HeadingLight = css`
  font-weight: 300;
  color: hsl(var(--white));
`;

const HeadingMedium = css`
  font-weight: 500;
  color: hsl(var(--white));
`;

const HeadingL = styled.h1`
  ${HeadingLight}
  font-size: 32px;
`;

const HeadingM = styled.h2`
  ${HeadingLight}
  font-size: 24px;
`;

const HeadingS = styled.h3`
  ${HeadingMedium}
  font-size: 24px;
`;

const HeadingXS = styled.h4`
  ${HeadingMedium}
  font-size: 18px;
`;

export { HeadingL, HeadingM, HeadingS, HeadingXS };
