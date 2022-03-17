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
`;

const StyledThumbnail = styled(Thumbnail)`
  min-width: 470px;
`;

export { Trending };
