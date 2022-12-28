import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { reviewsFilm } from '../services/api';
import Spinner from '../components/Spinner';

const Rewiews = () => {
  const [reviews, setReviews] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  useEffect(() => {
    setIsLoading(true);
    reviewsFilm(movieId)
      .then(response => setReviews(response.data.results))
      .catch(error => console.log(error))
      .finally(setIsLoading(false));
  }, [reviews, movieId]);

  if (!reviews) {
    return;
  }
  return (
    <div>
      {isLoading && <Spinner />}
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <h2>Author: {author}</h2>
                <p> {content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        "We don't have any rewiws for this movie"
      )}
    </div>
  );
};
export default Rewiews;
