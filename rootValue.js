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
  getDie: ({ numSides }) => new RandomDie(numSides || 6)
};

module.exports = rootValue;
