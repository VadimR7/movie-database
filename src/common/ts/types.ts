export interface SingleMovieInt {
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
  video: false;
  vote_average: number;
  vote_count: number;
}

export interface MovieContextInt {
  page: number;
  results: SingleMovieInt[];
  total_pages: number;
  total_results: number;
}

interface MovieGenre {
  id: number;
  name: string;
}

interface ProductionCompanies {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface ProductionCountries {
  iso_3166_1: string;
  name: string;
}

interface SpokenLanguages {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface CreditsCrewAndCastInt {
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  order: number;
  original_name: string;
  popularity: number;
  profile_path: string;
  job?: string;
  department: string;
}

export interface CreditsData {
  crew: CreditsCrewAndCastInt[];
  cast: CreditsCrewAndCastInt[];
}

export interface MovieInfoInt {
  adult: boolean;
  backdrop_path: string;
  budget: number;
  genres: MovieGenre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompanies[];
  production_countries: ProductionCountries[];
  spoken_languages: SpokenLanguages[];
  release_date: string;
  revenue: string;
  runtime: number;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  credits: CreditsData;
}

export interface CrewMembers {
  position: string;
  filterBy: keyof CreditsCrewAndCastInt;
  filterName: string;
}

export interface ItemWithTitleInt {
  title: string;
  items: string[];
}
