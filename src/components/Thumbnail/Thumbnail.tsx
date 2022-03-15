import styled from "styled-components";
import { ReactComponent as BookmarkEmptyIcon } from "assets/icon-bookmark-empty.svg";
import { ReactComponent as BookmarkFullIcon } from "assets/icon-bookmark-full.svg";
import { ReactComponent as PlayIcon } from "assets/icon-play.svg";
import { HeadingXS } from "components/Typography";

interface Props {
  small: string;
  medium: string;
  large: string;
  alt: string;
  isBookmarked: boolean;
}

function Thumbnail({ small, medium, large, alt, isBookmarked }: Props) {
  return (
    <Wrapper>
      <picture>
        <source media="(min-width: 1440px)" srcSet={`${large}`} />
        <source media="(min-width: 768px)" srcSet={`${medium}`} />
        <img src={small} alt={alt} />
      </picture>

      <Overlay>
        <PlayWrapper>
          <PlayIcon />
          <HeadingXS>Play</HeadingXS>
        </PlayWrapper>
      </Overlay>

      <BookmarkWrapper>
        {isBookmarked ? <BookmarkFullIcon /> : <BookmarkEmptyIcon />}
      </BookmarkWrapper>
    </Wrapper>
  );
}

const Overlay = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: hsl(0deg 0% 0% / 0.5);

  position: absolute;
  top: 0;
  left: 0;
`;

const Wrapper = styled.div`
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  position: relative;

  &:hover {
    ${Overlay} {
      display: flex;
    }
  }
`;

const BookmarkWrapper = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: hsl(var(--dark-blue) / 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 16px;
  right: 16px;

  &:hover {
    background: hsl(var(--white));

    & path {
      stroke-width: 1.5px;
      stroke: hsl(var(--dark-blue));
      fill: transparent;
    }
  }

  @media (max-width: 550px) {
    top: 8px;
    right: 8px;
  }
`;

const PlayWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  background: hsl(var(--white) / 0.25);
  padding: 9px;
  padding-right: 24px;
  border-radius: 28.5px;
`;

export { Thumbnail };
