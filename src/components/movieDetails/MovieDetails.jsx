import { Outlet } from 'react-router-dom';

import MovieInfo from '../movieInfo/MovieInfo';
import Button from '../button/Button';

const MovieDetails = () => {

  return (
    <>
      <Button />
      <MovieInfo />
      <Outlet />
    </>
  );
};

export default MovieDetails;