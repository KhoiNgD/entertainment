import { ReactComponent as MovieIcon } from "assets/icon-category-movie.svg";
import { ReactComponent as TVSeriesIcon } from "assets/icon-category-tv.svg";
import styled from "styled-components";

export interface IThumbnailInformation {
  title: string;
  year: number;
  category: string;
  rating: string;
}

export function getCategoryIcon(category: string) {
  if (category === "Movie") {
    return <MovieIcon />;
  } else {
    return <TVSeriesIcon />;
  }
}

export const Details = styled.div`
  opacity: 0.75;
  display: flex;
  align-items: center;
  gap: 8px;
`;
