import axios from 'axios';

const appUrl = 'https://localhost:44388/';

export function Get(Endpoint) {
    const url = appUrl + Endpoint;

    const options = {
        method: 'GET',
        url: url,
    };

    return axios(options)
}

export function Post(Endpoint, obj) {



    const url = appUrl + Endpoint;
    const options = {
        method: 'POST',
        url,
        data: obj
    };

    return axios(options);
}

export default Get;