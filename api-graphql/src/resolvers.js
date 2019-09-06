const api = require('./httpClient');

module.exports = {
    Query: {
        alunos() {
            console.log('------------------------------------------------');
            return api.get('/alunos')
                .then(resp => resp.data);
        },
        aluno(_, args) {
            console.log('------------------------------------------------');
            return api.get(`/alunos/${args.id}`)
                .then(resp => resp.data);
        },
        cursos() {
            console.log('------------------------------------------------');
            return api.get('/cursos')
                .then(resp => resp.data);
        },
        curso(_, args) {
            console.log('------------------------------------------------');
            return api.get(`/cursos/${args.id}`)
                .then(resp => resp.data);
        },
        escolas() {
            console.log('------------------------------------------------');
            return api.get('/escolas')
                .then(resp => resp.data);
        },
        escola(_, args) {
            console.log('------------------------------------------------');
            return api.get(`/escolas/${args.id}`)
                .then(resp => resp.data);
        }
    },
    Aluno: {
        curso(parent, _, ctx) {
            return ctx.dataLoaders.curso.load(parent.idCurso);
        },
        escola(parent, _, ctx) {
            return ctx.dataLoaders.escola.load(parent.idEscola);
        }
    },
    Escola: {
        cursos(parent, _, ctx) {
            return ctx.dataLoaders.curso.loadMany(parent.cursos);
        }
    }
};