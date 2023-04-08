import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const API_KEY = '8ea045b96646bcab5dbf8f19b575f601';

export const getTrandingMovies = () => {
    return axios
        .get('/trending/movie/day', {
            params: {
                api_key: API_KEY,
            }
        })
        .then(res => res.data);
}
export const getMoviesDetails = (id) => {
    return axios
        .get('/movie/' + id, {
            params: {
                api_key: API_KEY,
            }
        })
        .then(res => res.data);
}
export const getMovieCast = (id) => {
    return axios
        .get(`/movie/${id}/credits`, {
            params: {
                api_key: API_KEY,
            }
        })
        .then(res => res.data);
}
export const getMovieReview = (id) => {
    return axios
        .get(`/movie/${id}/reviews`, {
            params: {
                api_key: API_KEY,
            }
        })
        .then(res => res.data);
}
export const getSearchMovies = (query) => {
    return axios
        .get('/search/movie', {
            params: {
                api_key: API_KEY,
                query,
            }
        })
        .then(res => res.data);
}