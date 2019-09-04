const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const bodyParser = require('body-parser-graphql');
const { makeExecutableSchema } = require('graphql-tools');
const { express: voyager } = require('graphql-voyager/middleware');

const { importSchema } = require('graphql-import');
const typeDefs = importSchema(__dirname + '/schemas/schema.graphql');
const resolvers = require('./resolvers');
const dataLoaders = require('./dataLoaders');

const app = express();

const schema = makeExecutableSchema({ typeDefs, resolvers });

const server = new ApolloServer({
    schema,
    context: () => {
        return {
            dataLoaders
        };
    }
});

app.use(bodyParser.graphql());
//app.use(express.json());
app.use('/voyager', voyager({ endpointUrl: '/graphql' }));

server.applyMiddleware({ app, path: '/graphql' });

const port = process.env.NODE_PORT || 5000;
app.listen({ port }, () => {
    console.log(`Server running at http://localhost:${port}${server.graphqlPath}`);
});
