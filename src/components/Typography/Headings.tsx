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

  @media (max-width: 550px) {
    font-size: 20px;
    letter-spacing: -0.31px;
    line-height: 1;
  }
`;

const HeadingM = styled.h2`
  ${HeadingLight}
  font-size: 24px;

  @media (max-width: 550px) {
    font-size: 16px;
    letter-spacing: 0;
    line-height: 1;
  }
`;

const HeadingS = styled.h3`
  ${HeadingMedium}
  font-size: 24px;

  @media (max-width: 550px) {
    font-size: 15px;
    letter-spacing: 0;
    line-height: 1;
  }
`;

const HeadingXS = styled.h4`
  ${HeadingMedium}
  font-size: 18px;

  @media (max-width: 550px) {
    font-size: 14px;
    letter-spacing: 0;
    line-height: 1;
  }
`;

export { HeadingL, HeadingM, HeadingS, HeadingXS };
