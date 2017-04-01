const { GraphQLObjectType, GraphQLString, GraphQLSchema } = require('graphql');

const fakeDb = {
  'a': {
    id: 'a',
    name: 'alice',
  },
  'b': {
    id: 'b',
    name: 'bob',
  },
};

const userType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
  }
});

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    user: {
      type: userType,
      args: {
        id: { type: GraphQLString },
      },
      resolve: (_, {id}) => fakeDb[id],
    }
  }
});

const userSchema = new GraphQLSchema({ query: queryType });

module.exports = userSchema;
