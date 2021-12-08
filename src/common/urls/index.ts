import imagePlaceHolder from '../../images/No-Image-Placeholder.png';
import posterPlaceHolder from '../../images/No-Poster-Placeholder.png';

const API_KEY = '29efdf1c3ce50f5b88264a520cbae5e4';
const mainUrl = 'https://api.themoviedb.org/3';

export function discoverMovieUrl(pageNumber: number = 1) {
  if (pageNumber < 1 || pageNumber > 1000) pageNumber = 1;

  return `${mainUrl}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}`;
}

export function searchMovieUrl(
  query: string | null | '',
  pageNumber: number = 1,
) {
  if (pageNumber < 1 || pageNumber > 1000) pageNumber = 1;

  return `${mainUrl}/search/movie?api_key=${API_KEY}&query=${query}&page=${pageNumber.toString()}`;
}

type imageSize = 'w500' | 'original';
export function getMoviePosterUrl(
  path: string,
  size: imageSize = 'w500',
): string {
  if (!path) return imagePlaceHolder;
  return `https://image.tmdb.org/t/p/${size}${path}`;
}

export function getMainPoster(path: string = ''): string {
  if (!path) return posterPlaceHolder;
  return `https://image.tmdb.org/t/p/original${path}`;
}

export function getMovieDetailsUrl(id: string | null) {
  if (!id) return undefined;
  return `${mainUrl}/movie/${id}?api_key=${API_KEY}&language=en-US&append_to_response=credits`;
}
