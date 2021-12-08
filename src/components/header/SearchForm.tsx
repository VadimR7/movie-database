import { ChangeEvent, FormEvent, useState } from 'react';
import { useHistory } from 'react-router';
import { FaSearch } from 'react-icons/fa';

const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const history = useHistory();

  const onSearchSubmit = (
    e: FormEvent<HTMLFormElement | HTMLButtonElement>,
  ) => {
    e.preventDefault();
    if (!searchQuery) return;
    history.push({
      pathname: '/search',
      search: `?query=${encodeURI(searchQuery)}`,
    });
    setSearchQuery('');
  };

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <form
      spellCheck="false"
      action=""
      className="search"
      onSubmit={(e) => onSearchSubmit(e)}
    >
      <input
        type="text"
        name="search"
        id="search"
        className="search__input"
        value={searchQuery}
        onChange={(e) => onSearchChange(e)}
      />
      <button
        type="submit"
        className="search__button"
        onSubmit={(e) => onSearchSubmit(e)}
      >
        <FaSearch />
      </button>
    </form>
  );
};

export default SearchForm;
