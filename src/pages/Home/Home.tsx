import { GridThumbnails } from "components/GridThumbnails";
import { SearchField } from "components/SearchField";
import { Trending } from "components/Trending";
import { useData } from "context/data-context";
import { getRegulars, getTrendings } from "helpers";

function Home() {
  const [data] = useData();
  const trendings = getTrendings(data);
  const regulars = getRegulars(data);

  return (
    <>
      <SearchField placeholder="Search for movies or TV series" />
      <Trending data={trendings} />
      <GridThumbnails data={regulars} heading="Recommeded for you" />
    </>
  );
}

export { Home };
