import { GridThumbnails } from "components/GridThumbnails";
import { SearchField } from "components/SearchField";
import { useData } from "context/data-context";
import { DataType } from "helpers";

function TVSeries() {
  const [data] = useData();
  const tvseries = data
    .filter((item) => item.category === DataType.TV_SERIES)
    .map((item) => ({ ...item, isTrending: false }));

  return (
    <>
      <SearchField placeholder="Search for TV series" />
      <GridThumbnails data={tvseries} heading="TV Series" />
    </>
  );
}

export { TVSeries };
