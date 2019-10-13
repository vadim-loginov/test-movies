export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: number;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IFavouriteMovie {
  id: number;
  name: string;
  tags: string;
  tagArray: string[];
}

export interface IMovieSearchResult {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export interface IMovieListColumn {
  id: string;
  name: string;
  selected: boolean;
}

export interface IGenre {
  id: number;
  name: string;
}

export interface ITranslations {
  ru: Map<string, string>;
  en: Map<string, string>;
}
