const Room = require("../interfaces/room");
const Deck = require("../interfaces/deck");

const deck = new Deck();


//uses keys defined in objexts/names.js
//north,east,south,west,[seal]
deck.addRoom(new Room("exhaust", "damage", "burn", "heal", "blue"));
deck.addRoom(new Room("silence", "exhaust", "twoDamage", "burn"));
deck.addRoom(new Room("damage", "burn", "silence", "exhaust", "purple"));
deck.addRoom(new Room("heal","damage","twoDamage", "exhaust", "green"));

module.exports = deck;