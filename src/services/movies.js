import { API_KEY, BASE_API } from "../constants/services"
import { baseApi } from "./baseApi"

export const getMovies = async ({ query, page }) => {
    try {
        const { data } = await baseApi({ url: `${BASE_API}/?apikey=${API_KEY}&s=${query}&page=${page}` })
        return data
    } catch (error) {
        console.log('🚀 ~ file: movies.js:10 ~ getMovies ~ error:', error)
        return error
    }
}