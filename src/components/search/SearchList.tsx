import SearchItem from './SearchItem';
import { SingleMovieInt } from '../../common/ts/types';
import { getMoviePosterUrl } from '../../common/urls';

interface SearchListProp {
  foundItems: SingleMovieInt[];
}

const SearchList = ({ foundItems }: SearchListProp) => {
  return (
    <div>
      {foundItems.map((item) => (
        <SearchItem
          key={item.id}
          poster={getMoviePosterUrl(item.backdrop_path)}
          title={item.title}
          release_year={item.release_date}
          id={item.id}
        />
      ))}
    </div>
  );
};

export default SearchList;
