export enum buttonBackgroundEnum {
  danger = 'danger',
  success = 'success',
  primary = 'primary',
}
export enum LanguageEnum {
  de = 'de',
  en = 'en',
}
export interface MovieItemType {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
