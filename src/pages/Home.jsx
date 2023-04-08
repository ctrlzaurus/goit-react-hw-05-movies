import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { getTrandingMovies } from '../api/movied-service';

import d from './home.module.css';

// import Section from '../components/Section';
// import MovieList from '../components/MovieList';

const Home = () => {

    const [movies, setMovies] = useState([]);

    const location = useLocation();

    useEffect(() => {
        getTrandingMovies().then(r => setMovies(r.results));
    }, [])

    return <>
    {/* Loader */}
            <h1 className={d.mainTitle}>Trending today</h1>
            <ul className={d.list}>
                {movies.map(({title, id}) => (
                    <li key={id}
                        className={d.item}
                    >
                        <NavLink 
                            to={'/movies/' + id}
                            state={location}
                            className={d.item}
                        >
                            {title}
                        </NavLink>
                    </li>
                ))}
            </ul>
            {/* <MovieList /> */}
    </>;
};

export default Home;