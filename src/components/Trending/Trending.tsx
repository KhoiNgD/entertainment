import { Thumbnail } from "components/Thumbnail";
import { HeadingL } from "components/Typography";
import { Data, getThumbnailInfor, getTrendingSrcs } from "helpers";
import styled from "styled-components";

type Prop = { data: Data[] };

function Trending({ data }: Prop) {
  return (
    <>
      <HeadingL>Trending</HeadingL>
      <ThumbnailWrapper>
        {data.map((item) => (
          <StyledThumbnail
            key={item.title}
            {...getTrendingSrcs(item)}
            {...getThumbnailInfor(item)}
          />
        ))}
      </ThumbnailWrapper>
    </>
  );
}

const ThumbnailWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 40px;
  overflow-x: scroll;
  margin-top: 25px;
  margin-right: calc(var(--padding-x) * -1);

  --scrollbar-background: hsl(210deg, 15%, 6.25%);
  --scrollbar-text: hsl(210deg, 10%, 90%);
  --scrollbar-gray-300: hsl(210deg, 10%, 40%);
  --scrollbar-gray-500: hsl(210deg, 8%, 50%);

  scrollbar-color: var(--scrollbar-gray-300) var(--scrollbar-background);
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    height: 10px;
    background-color: var(--scrollbar-background);
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 1000px;
    background-color: var(--scrollbar-gray-300);
    border: 2px solid var(--scrollbar-background);
  }
  /*
    Little bonus: on non-Firefox browsers,
    the thumb will light up on hover!
  */
  &::-webkit-scrollbar-thumb:hover {
    background-color: var(--scrollbar-gray-500);
  }
`;

const StyledThumbnail = styled(Thumbnail)`
  min-width: 470px;
`;

export { Trending };
