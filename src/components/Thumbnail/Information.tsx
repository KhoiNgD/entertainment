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
        <span>
          {getCategoryIcon(category)} {category}
        </span>
        <Dot />
        <span>{rating}</span>
      </StyledDetails>
      <HeadingXS>{title}</HeadingXS>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const StyledDetails = styled(Details)`
  ${BodyS}
`;

export default Information;
