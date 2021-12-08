import useFetch from '../../hooks/useFetch';
import { MovieContextInt } from '../../common/ts/types';
import { discoverMovieUrl } from '../../common/urls';
import Loading from '../general/Loading';
import Error from '../general/Error';
import Welcome from './Welcome';
import MainPoster from '../mainPoster/MainPoster';
import MovieList from './MovieList';

const Main = () => {
  const { error, data } = useFetch<MovieContextInt>(discoverMovieUrl());

  if (!data?.results) return <Loading />;
  if (error) return <Error />;

  const posterUrl = data?.results[0].backdrop_path;

  return (
    <>
      <MainPoster posterUrl={posterUrl} />
      <div className="main">
        <div className="_container">
          <Welcome />
          <div className="main__films films">
            <MovieList moviesData={data.results} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
