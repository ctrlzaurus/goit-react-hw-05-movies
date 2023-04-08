import { useEffect, useState } from 'react';
import { useSearchParams, NavLink, useLocation} from 'react-router-dom';

import { getSearchMovies } from '../api/movied-service';

import Button from '../components/button/Button';

const SearchMovies = () => {

    const [searchMovies, setSearchMovies] = useState([]);

    const [input, setInput] = useState('');

    const [search, setSearch] = useSearchParams();

    const location = useLocation();

    const handlerSubmit = e => {
        e.preventDefault();
        setSearch({ query: input });
    };

    const query = search.get('query');

    useEffect(() => {
        getSearchMovies(query).then(r => setSearchMovies(r.results));
    }, [query])

    return <>
    {/* Loader */}
        <Button />
        <div>
            <form onSubmit={handlerSubmit}>
                <input
                    onChange={e => setInput(e.target.value)}
                    className=''
                    type='text'
                    placeholder='Search images and photos'
                />
            </form>
        </div>
            <ul>
                {searchMovies.map(({title, id}) => (
                    <li key={id}>
                        <NavLink 
                            to={'/movies/' + id}
                            state={location}>
                            {title}
                        </NavLink>
                    </li>
                ))}
            </ul>
    </>;
};

export default SearchMovies;