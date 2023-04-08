import { Route, Routes, Navigate, Outlet } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import { routes } from '../routes';
import MainNav from './mainNav/MainNav';
const Home = lazy(() => import('../pages/Home'));
const SearchMovies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../components/movieDetails/MovieDetails'));
const MovieCast = lazy(() => import('./movieCast/MovieCast'));
const MovieReview = lazy(() => import('./movieReview/MovieReview'));

const SharedLayout = () => {
  return (
    <>
      <MainNav />
      <Suspense fallback={<h1>Loading ...</h1>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export const App = () => {
  return (
    <Routes>
      <Route 
        path={routes.HOME} 
        element={<SharedLayout />}
      >
        <Route 
          index 
          element={<Home />} 
        />
        <Route 
          path={routes.MOVIES} 
          element={<SearchMovies />} 
        /> 
        <Route 
          path={routes.MOVIES_ID} 
          element={<MovieDetails />}
        >
          <Route
            path='cast'
            element={
              <Suspense
                fallback = {<h1>Loading ...</h1>}
              >
                <MovieCast />
              </Suspense>  
            }
          />

          <Route
            path='reviews'
            element={
              <Suspense
                fallback = {<h1>Loading ...</h1>}
              >
                <MovieReview />
              </Suspense>  
            }
          />
        </Route>

        <Route
          path="*"
          element={<Navigate to={routes.HOME} replace></Navigate>}
        />
      </Route>
    </Routes>
  );
};

export default App;
