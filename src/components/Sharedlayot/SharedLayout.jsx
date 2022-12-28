import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import Spinner from '../Spinner';
import styled from 'styled-components';
// import css from '../Sharedlayot/sharedlayot.module.css';

const NavItem = styled(NavLink)`
  color: black;
  margin-right: 10px;
  text-decoration: none;
  &.active {
    color: red;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: blue;
  }
`;

const SharedLayout = () => {
  return (
    <>
      <header>
        <nav>
          <NavItem to="/home" end>
            Home
          </NavItem>
          <NavItem to="movies">Movies</NavItem>
        </nav>
      </header>
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
