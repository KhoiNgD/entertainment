import { Thumbnail } from "components/Thumbnail";
import { HeadingL } from "components/Typography";
import { Data, getRegularSrcs, getThumbnailInfor } from "helpers";
import styled from "styled-components";

type Props = { heading: string; data: Data[] };

function GridThumbnails({ heading, data }: Props) {
  return (
    <>
      <HeadingL>{heading}</HeadingL>
      <Grid>
        {data.map((item) => (
          <Thumbnail
            key={item.title}
            {...getRegularSrcs(item)}
            {...getThumbnailInfor(item)}
          />
        ))}
      </Grid>
    </>
  );
}

const Grid = styled.div`
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  column-gap: 40px;
  row-gap: 32px;
`;

export { GridThumbnails };
