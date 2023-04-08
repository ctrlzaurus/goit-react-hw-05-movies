import { useEffect, useState } from 'react';
import { useLocation} from 'react-router-dom';
import { getMovieReview } from '../../api/movied-service';

import d from './movieReview.module.css';

const MovieReview = () => {

    const [movieReview, setMovieReview] = useState([]);

    const location = useLocation();
    const str = location.pathname;
    const parts = str.split('/');

    const id = parts[parts.length - 2];

    useEffect(() => {
        getMovieReview(id).then(r => setMovieReview(r.results));
    }, [id])

    return (
        <>
            <div className={d.reviewContainer}>
                <ul className={d.reviewList}>
                    {movieReview.map(({author, content, id}) => (
                        <li key={id} className={d.reviewCard}>
                            <p>{author}</p>
                            <p>{content}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default MovieReview;