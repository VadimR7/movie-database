import { useHistory } from 'react-router-dom';
import { createArr } from '../../common/helpers';

interface PageListProps {
  totalPages: number;
  currentPage: number;
  currentQuery: string;
}

function PageNavigation({
  totalPages,
  currentPage,
  currentQuery,
}: PageListProps) {
  const pagesArr = createArr(totalPages);
  const history = useHistory();

  const onPageButtonClick = (page: number) => {
    history.push(`/search?query=${currentQuery}&page=${page}`);
  };

  const onPreviousPageButtonClick = (page: number) => {
    history.push(`/search?query=${currentQuery}&page=${page - 1}`);
  };

  const onNextPageButtonClick = (page: number) => {
    history.push(`/search?query=${currentQuery}&page=${page + 1}`);
  };

  return (
    <div className="search_result__pagination search-pagination">
      <button
        type="button"
        className="search-pagination__nav-button"
        onClick={() => onPreviousPageButtonClick(currentPage)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <ul className="search-pagination__list">
        {pagesArr.map((page) => (
          <li key={page} className="search-pagination__link active">
            <button
              className={
                currentPage === page
                  ? 'search-pagination__link-button active'
                  : 'search-pagination__link-button'
              }
              type="button"
              onClick={() => onPageButtonClick(page)}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="search-pagination__nav-button"
        onClick={() => onNextPageButtonClick(currentPage)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}

export default PageNavigation;
