import axios from 'axios';

const appUrl = 'https://localhost:44396/';

export function Get(Endpoint) {
    const url = appUrl + Endpoint;

    const options = {
        method: 'GET',
        url: url,
    };

    return axios(options)
}

export function Post(Endpoint, data) {

    const url = appUrl + Endpoint;

    const options = {
        method: 'POST',
        url,
        data
    };

    return axios(options);
}

export default Get;