const api = require('./httpClient');

module.exports = {
    Query: {
        alunos(parent) {
            console.log('------------------------------------------------');
            return api.get('/alunos')
                .then(resp => Promise.resolve(resp.data));
        },
        aluno(parent, args) {
            console.log('------------------------------------------------');
            return api.get(`/alunos/${args.id}`)
                .then(resp => Promise.resolve(resp.data));
        },
        cursos(parent) {
            console.log('------------------------------------------------');
            return api.get('/cursos')
                .then(resp => Promise.resolve(resp.data));
        },
        curso(parent, args) {
            console.log('------------------------------------------------');
            return api.get(`/cursos/${args.id}`)
                .then(resp => Promise.resolve(resp.data));
        },
        escolas(parent) {
            console.log('------------------------------------------------');
            return api.get('/escolas')
                .then(resp => Promise.resolve(resp.data));
        },
        escola(parent, args) {
            console.log('------------------------------------------------');
            return api.get(`/escolas/${args.id}`)
                .then(resp => Promise.resolve(resp.data));
        }
    },
    Aluno: {
        curso(parent, args, ctx) {
            return ctx.dataLoaders.curso.load(parent.idCurso);
        },
        escola(parent, args, ctx) {
            return ctx.dataLoaders.escola.load(parent.idEscola);
        }
    },
    Escola: {
        cursos(parent, args, ctx) {
            return ctx.dataLoaders.curso.loadMany(parent.cursos);
        }
    }
};