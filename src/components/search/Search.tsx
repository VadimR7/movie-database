import useFetch from '../../hooks/useFetch';
import PageNavigation from './PageNavigation';
import { useQuery } from '../../hooks/hooks';
import { searchMovieUrl } from '../../common/urls';
import { MovieContextInt } from '../../common/ts/types';
import Loading from '../general/Loading';
import Error from '../general/Error';
import SearchList from './SearchList';

const Search = () => {
  let query = useQuery();
  const searchQuery = query.get('query');
  const pageQuery = query.get('page') ? Number(query.get('page')) : 1;

  const url = searchMovieUrl(searchQuery, pageQuery);

  const { error, data } = useFetch<MovieContextInt>(url);

  if (!data?.results || !searchQuery) return <Loading />;
  if (error) return <Error />;

  const { page, total_pages, total_results } = data;

  return (
    <div className="search_result">
      <div className="_container">
        {data.results.length ? (
          <>
            <h2 className="search_result__title">
              Found at least {total_results} matches for &ldquo;{searchQuery}
              &rdquo;
            </h2>
            <SearchList foundItems={data.results} />
            <PageNavigation
              totalPages={total_pages}
              currentPage={page}
              currentQuery={searchQuery}
            />
          </>
        ) : (
          <div>No search results</div>
        )}
      </div>
    </div>
  );
};

export default Search;
