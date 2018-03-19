const Engine = require("../interfaces/engine");
const deck = require("./deck");
const players = require("./players");

const engine = new Engine(deck, players);

module.exports = engine;