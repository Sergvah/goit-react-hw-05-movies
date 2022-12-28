import { useState, useEffect } from 'react';
import { searchNameMovies } from '../services/api';
import { useSearchParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import MovieList from 'components/MovieList';
import SearchInput from '../components/SearchInput';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [listOfFilms, setListOfFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get('query') ?? '';

  useEffect(() => {
    if (filter === '') {
      return;
    }
    setIsLoading(true);
    searchNameMovies(filter)
      .then(response => {
        setListOfFilms(response.data.results);
      })
      .catch(error => console.log(error))
      .finally(setIsLoading(false));
  }, [query, filter]);
  const onSearchInput = query => {
    setSearchParams({ query });
    console.log(query);
    setQuery(query);
  };
  //   const visibleFilms = listOfFilms.filter(film =>
  //     film.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  return (
    <div>
      {isLoading && <Spinner />}
      <SearchInput onSubmit={onSearchInput} />
      <MovieList movies={listOfFilms} />
    </div>
  );
};
export default Movies;
