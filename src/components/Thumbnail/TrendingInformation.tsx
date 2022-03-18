import { BodyM, HeadingS } from "components/Typography";
import styled from "styled-components";
import Dot from "./Dot";
import { Details, getCategoryIcon, IThumbnailInformation } from "./shared";

function TrendingInformation({
  title,
  year,
  category,
  rating,
}: IThumbnailInformation) {
  return (
    <Wrapper>
      <StyledDetails>
        <span>{year}</span>
        <Dot />
        <Category>
          {getCategoryIcon(category)} {category}
        </Category>
        <Dot />
        <span>{rating}</span>
      </StyledDetails>
      <HeadingS>{title}</HeadingS>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  left: 24px;
  bottom: 24px;
`;

const Category = styled.span`
  display: flex;
  align-items: baseline;
  gap: 6px;
`;

const StyledDetails = styled(Details)`
  ${BodyM}

  @media (max-width: 550px) {
    margin-bottom: 4px;
  }
`;

export default TrendingInformation;
