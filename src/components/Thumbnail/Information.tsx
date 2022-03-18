import { BodyS, HeadingXS } from "components/Typography";
import styled from "styled-components";
import Dot from "./Dot";
import { Details, getCategoryIcon, IThumbnailInformation } from "./shared";

function Information({ title, year, category, rating }: IThumbnailInformation) {
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
      <HeadingXS>{title}</HeadingXS>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Category = styled.span`
  display: flex;
  align-items: baseline;
  gap: 6px;
`;

const StyledDetails = styled(Details)`
  ${BodyS}

  @media (max-width: 550px) {
    margin-bottom: 4px;
  }
`;

export default Information;
