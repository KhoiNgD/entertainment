import { SearchField } from "components/SearchField";
import { Trending } from "components/Trending";
import data from "data/data.json";
import { getTrendings } from "helpers";

function Home() {
  const trendings = getTrendings(data);

  return (
    <>
      <SearchField />
      <Trending data={trendings} />
    </>
  );
}

export { Home };
