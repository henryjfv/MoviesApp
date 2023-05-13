import { API_KEY, BASE_API } from "../constants/services"
import { baseApi } from "./baseApi"

export const getMovies = ({ query }) => {
    try {

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://www.omdbapi.com/?apikey=67f4512e&s=harry potter',
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });

    } catch (error) {
        console.log('🚀 ~ file: movies.js:10 ~ getMovies ~ error:', error)
        return error
    }
}

export const getMovieById = ({ Id }) => {
    try {
        return baseApi({ url: `${BASE_API}/?apikey=${API_KEY}&i=${Id}` })
    } catch (error) {
        console.log('🚀 ~ file: movies.js:10 ~ baseApi ~ error:', error)
        return error
    }
}