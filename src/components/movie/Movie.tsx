import MainPoster from '../mainPoster/MainPoster';
import { MovieInfoInt, ItemWithTitleInt } from '../../common/ts/types';
import useFetch from '../../hooks/useFetch';
import { useQuery } from '../../hooks/hooks';
import { getMovieDetailsUrl, getMoviePosterUrl } from '../../common/urls';
import Loading from '../general/Loading';
import InfoTabs from './InfoTabs';
import { imgBg } from '../../common/helpers';
import Error from '../general/Error';
import StarRating from './StarRating';

const Movie = () => {
  let query = useQuery();
  const movieId = query.get('id');

  const url = getMovieDetailsUrl(movieId);

  const { data, error } = useFetch<MovieInfoInt>(url);

  if (!data) return <Loading />;
  if (error) return <Error />;

  const {
    backdrop_path,
    title,
    tagline,
    poster_path,
    release_date,
    credits: { crew },
    overview,
    production_companies,
    production_countries,
    spoken_languages,
    genres,
    vote_average,
    vote_count,
  } = data;

  const detailsData: ItemWithTitleInt[] = [
    {
      title: 'studios',
      items: production_companies.map((item) => item.name),
    },
    {
      title: 'countries',
      items: production_countries.map((item) => item.name),
    },
    {
      title: 'languages',
      items: spoken_languages.map((item) => item.english_name),
    },
  ];

  const genresData = genres.map((genre) => genre.name);

  let directorName = 'uknown';

  if (crew.length) {
    const [{ name: director }] = crew.filter(
      (member) => member.job === 'Director',
    );
    directorName = director;
  }

  return (
    <>
      <MainPoster posterUrl={backdrop_path} />
      <div className="movie">
        <div className="_container">
          <div className="movie__row">
            <div className="movie__poster">
              {imgBg(getMoviePosterUrl(poster_path), 'movie__poster-container')}
              <div className="movie__tagline">
                <h4>{tagline}</h4>
              </div>
            </div>
            <div className="movie__content">
              <section className="movie__content-header">
                <h1 className="movie__title">{title}</h1>
                <p className="movie__info">
                  <small className="movie__release-date">
                    {release_date.split('-')[0]}
                  </small>
                  <span>
                    <small style={{ fontSize: '14px' }}> Directed by </small>{' '}
                    <span className="movie__director">{directorName}</span>
                  </span>
                </p>
              </section>
              <p className="movie__description">{overview}</p>
              <InfoTabs
                creditsData={data.credits}
                detailsData={detailsData}
                genresData={genresData}
              />
            </div>
            <div className="movie__rating">
              <h3>Rating</h3>
              <StarRating
                totalStars={10}
                selectedStars={vote_average}
                totalVotes={vote_count}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;
