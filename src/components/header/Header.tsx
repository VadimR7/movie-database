import Logo from './Logo';
import SearchForm from './SearchForm';

const Header = () => {
  return (
    <header className="header">
      <div className="_container">
        <div
          className="flex-container"
          style={{
            alignItems: 'center',
            justifyContent: 'space-between',
            minHeight: '55px',
          }}
        >
          <Logo />
          <SearchForm />
        </div>
      </div>
    </header>
  );
};

export default Header;
