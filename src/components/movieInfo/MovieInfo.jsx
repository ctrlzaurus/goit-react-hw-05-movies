import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { useLocation, NavLink } from 'react-router-dom';

import d from './movieInfo.module.css';

import { getMoviesDetails } from '../../api/movied-service';

const getACtiveClass = ({ isActive }) => clsx(d.link, isActive && d.active);

const MovieInfo = () => {

    const [movieInfo, setMovieInfo] = useState({});

    const {
        poster_path,
        title,
        release_date,
        vote_average,
        overview,
        genres = [],
    } = movieInfo;

    const location = useLocation();
    const str = location.pathname;
    const parts = str.split('/');

    let id = 0;
    if (
        parts[parts.length - 1] === 'cast' ||
        parts[parts.length - 1] === 'reviews'
    ) {
        id = parts[parts.length - 2];
    } else {
        id = parts[parts.length - 1];
    }

    useEffect(() => {
        getMoviesDetails(id).then(r => setMovieInfo(r));
    }, [id])

  return (
    <>
        {poster_path && (
            <div className={d.infoContainer}>
                <div className={d.posterP}>
                    <img
                        src={'https://image.tmdb.org/t/p/original' + poster_path}
                        className={d.poster}
                        alt=""
                    />
                </div>
                <div className={d.infoP}>
                    <h1 className={d.infoMainTitle}>{title} ({parseInt(release_date)})</h1>
                    <p className={d.infoDescription}>User score: {vote_average}</p>
                    <h2 className={d.infoTitle}>Overview</h2>
                    <p className={d.infoDescription}>{overview}</p>
                    <h2 className={d.infoTitle}>Genres</h2>
                    <ul className={d.infoList}>
                        {genres.map(({ name, id }) => (
                            <li 
                                key={id} 
                                className={d.infoItem}>
                                {name}
                            </li>
                        ))}
                    </ul>
                    <button className={d.infoBtn}>
                        <NavLink
                            className={getACtiveClass}
                            state={location.state}
                            to="cast"
                        >
                            Cast
                        </NavLink>
                    </button>
                    <button className={d.infoBtn}>
                        <NavLink
                            className={getACtiveClass}
                            state={location.state}
                            to="reviews"
                        >
                            Reviews
                        </NavLink>
                    </button>
                </div>
            </div>
        )}
    </>
  );
};

export default MovieInfo;
