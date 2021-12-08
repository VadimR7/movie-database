import { Link } from 'react-router-dom';
import { imgBg } from '../../common/helpers';

interface SearchItemProps {
  poster: string;
  title: string;
  release_year: string;
  id: number;
}

const SearchItem = ({ poster, title, release_year, id }: SearchItemProps) => {
  return (
    <div className="search_result__item search-item">
      <Link to="/movie/">{imgBg(poster, 'search-item__image')}</Link>
      <span className="search-item__title">
        <Link to={`/movie?id=${id}`}>{title}</Link>
      </span>
      <span className="search-item__year">
        {release_year ? release_year.split('-')[0] : '----'}
      </span>
    </div>
  );
};

export default SearchItem;
