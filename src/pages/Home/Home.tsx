import { GridThumbnails } from "components/GridThumbnails";
import { SearchField } from "components/SearchField";
import { Trending } from "components/Trending";
import data from "data/data.json";
import { getRegulars, getTrendings } from "helpers";
import styled from "styled-components";

function Home() {
  const trendings = getTrendings(data);
  const regulars = getRegulars(data);

  return (
    <>
      <SearchField />
      <Margin height={20} />
      <Trending data={trendings} />
      <Margin height={40} />
      <GridThumbnails data={regulars} heading="Recommeded for you" />
    </>
  );
}

interface MarginProp {
  height: number;
}

const Margin = styled.div<MarginProp>`
  height: ${(prop) => prop.height}px;
`;

export { Home };
