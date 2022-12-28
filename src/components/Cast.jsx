import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import img from '../services/default.png';
import { infoActors } from '../services/api';
import Spinner from './Spinner';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  useEffect(() => {
    setIsLoading(true);
    infoActors(movieId)
      .then(response => setCast(response.data.cast))
      .catch(error => console.log(error).finally(setIsLoading(false)));
  }, [cast, movieId]);

  if (!cast) {
    return;
  }
  return (
    <div>
      {isLoading && <Spinner />}
      {
        <ul>
          {cast.map(({ id, profile_path, original_name, character }) => {
            return (
              <li key={id}>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                      : img
                  }
                  alt={original_name}
                />
                <p>{original_name}</p>
                <p>Character: {character}</p>
              </li>
            );
          })}
        </ul>
      }
    </div>
  );
};
export default Cast;
