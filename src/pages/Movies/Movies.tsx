import { GridThumbnails } from "components/GridThumbnails";
import { SearchField } from "components/SearchField";
import { useData } from "context/data-context";
import { DataType } from "helpers";

function Movies() {
  const [data] = useData();
  const movies = data
    .filter((item) => item.category === DataType.MOVIE)
    .map((item) => ({ ...item, isTrending: false }));

  return (
    <>
      <SearchField placeholder="Search for Movies" />
      <GridThumbnails data={movies} heading="Movies" />
    </>
  );
}

export { Movies };
