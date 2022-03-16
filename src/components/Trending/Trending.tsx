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
  overflow: scroll;
`;

const StyledThumbnail = styled(Thumbnail)`
  max-width: 470px;
  min-width: 240px;
`;

export { Trending };
