import Spinner from 'components/Spinner';
import { useEffect } from 'react';
import { useState, Suspense } from 'react';
import { useParams, Outlet, NavLink, useLocation } from 'react-router-dom';
import { infoFilm } from '../../services/api';
import img from '../../services/default.png';
import styled from 'styled-components';
import css from '../MovieDetails/moviedetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const NavItem = styled(NavLink)`
    color: white;
    margin-right: 10px;
    text-decoration: none;
    background-color: dimgrey;
    padding: 3px;
    border-radius: 5px;
    margin-bottom: 10px;
    &.active {
      color: black;
      border-style: solid;
      border-width: 1px;
      border-color: inherit;
    }
    :hover:not(.active),
    :focus-visible:not(.active) {
      color: black;
      border-style: solid;
      border-width: 1px;
      border-color: inherit;
    }
  `;
  const GoBack = styled(NavLink)`
    color: white;

    text-decoration: none;
    height: 18px;
    width: 60px;
    border-color: inherit;
    border-style: solid;
    border-width: 1px;
    background: dimgrey;
    border-radius: 5px;
    cursor: pointer;
    padding: 3px;
    margin-top: 10px;
    margin-left: 20px;
    // text-aligh: center;

    :hover,
    :focus {
      color: black;
      border-color: black;
    }
  `;
  const location = useLocation();
  useEffect(() => {
    setIsLoading(true);
    infoFilm(movieId)
      .then(response => {
        setMovie(response.data);
      })
      .catch(error => console.log(error))
      .finally(setIsLoading(false));
  }, [movieId]);

  const backLinkHref = location.state?.from ?? '/home';
  if (!movie) {
    return;
  }
  const { original_title, poster_path, vote_average, overview, genres } = movie;
  return (
    <div className={css.movie_search}>
      <GoBack to={backLinkHref}>Go back</GoBack>
      {isLoading && <Spinner />}
      <div>
        <img
          className={css.img_movie_search}
          src={
            poster_path ? `https://image.tmdb.org/t/p/w300/${poster_path}` : img
          }
          alt={original_title}
        />
        <div className={css.info_block}>
          <h2>{original_title}</h2>
          <p>User score : {vote_average}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <ul>
            <h3>Genres</h3>
            {genres.map(({ id, name }) => (
              <li key={id} className={css.list_actors}>
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={css.addi}>
        <h2>Additional Information</h2>
        <NavItem to={'cast'} state={{ from: backLinkHref }}>
          Cast
        </NavItem>
        <NavItem to={'reviews'} state={{ from: backLinkHref }}>
          Reviews
        </NavItem>
      </div>
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default MovieDetails;
