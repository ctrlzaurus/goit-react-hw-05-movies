import { useEffect, useState } from 'react';
import { useLocation} from 'react-router-dom';
import { getMovieCast } from '../../api/movied-service';

import d from './movieCast.module.css';

const MovieCast = () => {

    const [movieCast, setMovieCast] = useState([]);

    const location = useLocation();
    const str = location.pathname;
    const parts = str.split('/');

    const id = parts[parts.length - 2];

    useEffect(() => {
        getMovieCast(id).then(r => setMovieCast(r.cast));
    }, [id])

    return (
        <>
            <div className={d.castContainer}>
                <ul className={d.castList}>
                    {movieCast.map(({name, character, profile_path, id}) => (
                        <li key={id} className={d.castCard}>
                            <img
                                src={profile_path !== null
                                    ? 'https://image.tmdb.org/t/p/original' + profile_path
                                    : 'https://www.revixpert.ch/app/uploads/portrait-placeholder.jpg'}
                                className={d.castPhoto}
                                alt=""
                                height={225}
                            />
                            <div className={d.castT}>
                                <p className={d.castTitle}>{name}</p>
                                <p className={d.castTitle}>Character: {character}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default MovieCast;