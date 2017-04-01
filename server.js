const express = require('express');
const graphqlHTTP = require('express-graphql');
const { graphql } = require('graphql');
const RandomDie = require('./RandomDie');
const schema = require('./schema');
const rootValue = require('./rootValue');

const app = express();

const loggingMiddleware = (req, res, next) => {
  console.log('ip: ', req.ip);
  next();
}

app.use(loggingMiddleware);

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue,
  graphiql: true,
}));

app.listen(4000, () => {
  console.log('GraphQL server running at localhost:4000/graphql');
});
