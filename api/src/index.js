const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const alunoController = require('./controllers/alunoController');
const escolaController = require('./controllers/escolaController');
const cursoController = require('./controllers/cursoController');

app.use('/alunos', alunoController);
app.use('/escolas', escolaController);
app.use('/cursos', cursoController);

const port = process.env.NODE_PORT || 4000;
app.listen({port}, () => {
    console.log(`Server running at http://localhost:${port}`);
});
