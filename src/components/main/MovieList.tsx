import { SingleMovieInt } from '../../common/ts/types';
import MovieCard from './MovieCard';

interface FilmListProps {
  moviesData: SingleMovieInt[];
}

const MovieList = ({ moviesData }: FilmListProps) => {
  return (
    <ul className="films__list">
      {moviesData.slice(0, 12).map((movie) => (
        <li className="films__item" key={movie.id}>
          <MovieCard
            original_title={movie.original_title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
            id={movie.id}
          />
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
