const api = require('./httpClient');
let DataLoader = require('dataloader');

module.exports = {
    curso: new DataLoader((ids) => {
        return Promise
            .all(ids.map(id => api.get(`/cursos/${id}`)))
            .then(resp => {
                const cursos = resp.map(r => r.data);
                return Promise.resolve(cursos);
            });
    }),
    escola: new DataLoader((ids) => {
        return Promise
            .all(ids.map(id => api.get(`/escolas/${id}`)))
            .then(resp => {
                const escolas = resp.map(r => r.data);
                return Promise.resolve(escolas);
            });
    })
};
