import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const MovieList = ({ movies }) => {
  const NavItem = styled(NavLink)`
    display: flex;
    flex-direction: column;
    color: black;
    text-decoration: none;
    :hover,
    :focus {
      color: blue;
    }
  `;

  const location = useLocation();
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <NavItem to={`/movies/${id}`} key={id} state={{ from: location }}>
          {title}
        </NavItem>
      ))}
    </ul>
  );
};
export default MovieList;
