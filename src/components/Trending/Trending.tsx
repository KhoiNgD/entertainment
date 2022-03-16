import { Thumbnail } from "components/Thumbnail";
import { HeadingL } from "components/Typography";
import { Data, getThumbnailInfor, getThumbnailSrcs } from "helpers";
import styled from "styled-components";

function Trending(data: Data[]) {
  return (
    <>
      <HeadingL>Trending</HeadingL>
      <ThumbnailWrapper>
        {data.map((item) => (
          <StyledThumbnail
            key={item.title}
            {...getThumbnailSrcs(item)}
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
