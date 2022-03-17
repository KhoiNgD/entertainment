interface Trending {
  small: string;
  large: string;
}

interface Regular {
  small: string;
  medium: string;
  large: string;
}

export interface Data {
  title: string;
  thumbnail: {
    trending?: Trending;
    regular: Regular;
  };
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}

export function getTrendings(data: Data[]) {
  return data.filter((item) => item.isTrending);
}

export function getRegulars(data: Data[]) {
  return data.filter((item) => !item.isTrending);
}

export function getTrendingSrcs(data: Data) {
  const { trending } = data.thumbnail;

  return {
    large: trending!.large,
    medium: trending!.large,
    small: trending!.small,
    alt: `${data.title}'s poster`,
  };
}

export function getRegularSrcs(data: Data) {
  const { regular } = data.thumbnail;
  const { large, medium, small } = regular;

  return {
    large,
    medium,
    small,
    alt: `${data.title}'s poster`,
  };
}

export function getThumbnailInfor(data: Data) {
  const { thumbnail, ...infor } = data;
  return infor;
}
