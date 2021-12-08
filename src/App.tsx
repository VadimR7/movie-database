import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import Loading from './components/general/Loading';
import Movie from './components/movie/Movie';
import './App.scss';
import Footer from './components/footer/Footer';
import ScrollToTop from './components/ScrollToTop';

const Main = lazy(() => import('./components/main/Main'));
const Search = lazy(() => import('./components/search/Search'));

function App() {
  console.log('App RENDERED');
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <ScrollToTop />
        <Header />
        <main className="page">
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route
              path="/search"
              render={(props) => <Search key={props.location.key} />}
            />
            <Route path="/movie">
              <Movie />
            </Route>
          </Switch>
        </main>
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
