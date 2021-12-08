import { Link } from 'react-router-dom';
import { getMoviePosterUrl } from '../../common/urls';

interface FilmProps {
  original_title: string;
  poster_path: string;
  release_date: string;
  id: number;
}

const MovieCard = ({
  original_title,
  poster_path,
  release_date,
  id,
}: FilmProps) => {
  let noPosterStyle = {};

  if (!poster_path) {
    noPosterStyle = {
      opacity: 1,
    };
  }

  return (
    <>
      <img src={getMoviePosterUrl(poster_path)} alt={original_title} />
      <div className="films__item-info" style={noPosterStyle}>
        <h3 className="films__item-title">{original_title}</h3>
        <p className="films__item-release">{release_date}</p>
      </div>
      <Link to={`/movie?id=${id}`}>
        <span className="films__item-overlay" />
      </Link>
    </>
  );
};

export default MovieCard;
