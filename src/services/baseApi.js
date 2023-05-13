import axios from 'axios'
export const baseApi = (
    { method,
        url,
        data = {},
        header = {
            'content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE'
        }
    }
) => {
    const response = data || method === 'get'
        ? axios({
            method,
            url,
            data,
            headers: {
                ...header
            }
        })
        : {}
    return response
} 