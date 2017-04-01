const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Mutation {
    setMessage(message: String): String
  }

  type RandomDie {
    numSides: Int!
    roll(numRolls: Int!): [Int]
    rollOnce: Int!
  }

  type Query {
    hello: String
    random: Float!
    rollDice(numDice: Int!, numSides: Int): [Int]
    getDie(numSides: Int): RandomDie
    getMessage: String
  }
`);

module.exports = schema;
