import { useEffect, useState } from 'react';
import { MovieContextInt } from '../common/ts/types';
import { useLocation } from 'react-router-dom';

type UseFetch = [MovieContextInt, null | string, boolean];

export const useFetch = (uri: string): UseFetch => {
  const [movies, setMovies] = useState({} as MovieContextInt);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!uri) return;

    fetch(uri)
      .then((res) => res.json())
      .then((data) => {
        if (data.results) {
          setMovies(data);
        } else {
          setError(data.status_message);
        }
      })
      .then(() => setLoading(false))
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [uri]);

  return [movies, error, loading];
};

export function useQuery() {
  return new URLSearchParams(useLocation().search);
}
