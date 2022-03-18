import { GridThumbnails } from "components/GridThumbnails";
import { SearchField } from "components/SearchField";
import { Trending } from "components/Trending";
import { useData } from "context/data-context";
import { getRegulars, getTrendings } from "helpers";
import styled from "styled-components";

function Home() {
  const [data] = useData();
  const trendings = getTrendings(data);
  const regulars = getRegulars(data);

  return (
    <>
      <SearchField placeholder="Search for movies or TV series" />
      <Wrapper>
        <Trending data={trendings} />
        <GridThumbnails data={regulars} heading="Recommeded for you" />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export { Home };
