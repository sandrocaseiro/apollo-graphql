const api = require('./httpClient');
let DataLoader = require('dataloader');

module.exports = {
    curso: new DataLoader((ids) => {
        return Promise
            .all(ids.map(id => api.get(`/cursos/${id}`)))
            .then(resp => resp.map(r => r.data));
    }),
    escola: new DataLoader((ids) => {
       return Promise
            .all(ids.map(id => api.get(`/escolas/${id}`)))
            .then(resp => resp.map(r => r.data)); 
    })
};
