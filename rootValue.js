const { randomBytes } = require('crypto');
const Message = require('./Message');

const fakeDb = {};

const rootValue = {
  hello: () => {
    return 'Hello world !';
  },
  random: () => {
    return Math.random();
  },
  rollDice: ({ numDice, numSides }) => {
    const output = [];
    for (let i = 0; i < numDice; i += 1) {
      output.push(1 + Math.floor(Math.random() * (numSides || 6)));
    }
    return output;
  },
  getDie: ({ numSides }) => new RandomDie(numSides || 6),
  createMessage: ({ input }) => {
    const id = randomBytes(10).toString('hex');
    fakeDb[id] = input;
    return new Message(id, input);
  },
  getMessage: (id) => {
    if (!fakeDb[id]) {
      throw new Error(`no message with id: ${id}`);
    }
    return new Message(id, fakeDb[id]);
  },
  updateMessage: ({ id, input }) => {
    if (!fakeDb[id]) {
      throw new Error(`no message with id: ${id}`);
    }
    fakeDb[id] = input;
    return new Message(id, input);
  },
  ip: (args, request) => request.ip,
};

module.exports = rootValue;
