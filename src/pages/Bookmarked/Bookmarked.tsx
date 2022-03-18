import { GridThumbnails } from "components/GridThumbnails";
import { SearchField } from "components/SearchField";
import { useData } from "context/data-context";
import styled from "styled-components";

function Bookmarked() {
  const [data] = useData();
  const bookmarkedMovies = data
    .filter((item) => item.category === "Movie" && item.isBookmarked)
    .map((item) => ({ ...item, isTrending: false }));
  const bookmarkedTVSeries = data
    .filter((item) => item.category === "TV Series" && item.isBookmarked)
    .map((item) => ({ ...item, isTrending: false }));

  return (
    <>
      <SearchField placeholder="Search for bookmarked shows" />
      <Wrapper>
        <GridThumbnails data={bookmarkedMovies} heading="Bookmarked Movies" />
        <GridThumbnails
          data={bookmarkedTVSeries}
          heading="Bookmarked TV Series"
        />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export { Bookmarked };
