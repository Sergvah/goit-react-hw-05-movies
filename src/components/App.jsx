import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() =>
  import('../pages/MovieDetails/MovieDetails.jsx')
);
const SharedLayout = lazy(() => import('./Sharedlayot/SharedLayout'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));
export const App = () => {
  return (
    <>
      {/* <SharedLayout /> */}
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Navigate to="home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
