const Room = require("../interfaces/room");
const Deck = require("../interfaces/deck");

const deck = new Deck();

deck.addRoom(new Room("uno", "due", "tre", "quattro"));
deck.addRoom(new Room("cane", "gatto", "coniglio", "papera"));
deck.addRoom(new Room("forchetta", "coltello", "cucchiaio", "piatto"));
deck.addRoom(new Room("rosso", "verde", "blu", "giallo"));

module.exports = deck;