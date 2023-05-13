import { API_KEY, BASE_API } from "../constants/services"
import { baseApi } from "./baseApi"

export const getMovies = ({ query }) => {
    try {
        return baseApi({ url: `${BASE_API}/?apikey=${API_KEY}&s=${query}` })
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