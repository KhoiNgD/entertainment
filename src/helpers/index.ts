export interface Data {
  title: string;
  thumbnail: {
    trending: {
      small: string;
      large: string;
    };
    regular: {
      small: string;
      medium: string;
      large: string;
    };
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

export function getThumbnailSrcs(data: Data, isTrending = false) {
  const { thumbnail } = data;
  const thumbnailType = isTrending ? "trending" : "regular";

  return {
    large: thumbnail[thumbnailType].large,
    medium: isTrending ? thumbnail.trending.large : thumbnail.regular.medium,
    small: thumbnail[thumbnailType].small,
    alt: `${data.title}'s poster`,
  };
}

export function getThumbnailInfor(data: Data) {
  const { thumbnail, ...infor } = data;
  return infor;
}
