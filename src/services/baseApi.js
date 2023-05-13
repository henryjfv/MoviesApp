import axios from 'axios'
export const baseApi = ({ url }) => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url,
        headers: {}
    };

    return axios.request(config);
} 