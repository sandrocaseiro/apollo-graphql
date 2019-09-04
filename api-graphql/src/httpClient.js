const axios = require('axios');

const client = axios.create({
    baseURL: 'http://localhost:4000',
});

client.interceptors.request.use(req => {
    console.log(req.url);
    return req;
});

module.exports = client;
