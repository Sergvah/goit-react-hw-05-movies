import { useEffect, useState } from 'react';
import { trendingList } from '../services/api';
import MovieList from '../components/MovieList';
import Spinner from '../components/Spinner';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    trendingList()
      .then(response => {
        setMovies(response.data.results);
      })
      .catch(error => console.log(error))
      .finally(setIsLoading(false));
  }, []);
  return (
    <main>
      <h1>Trending today</h1>
      {isLoading && Spinner}
      {movies && <MovieList movies={movies} />}
    </main>
  );
};
export default Home;
