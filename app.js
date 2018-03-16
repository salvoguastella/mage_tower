const deck = require("./objects/deck");
const players = require("./objects/players");
const names = require("./objects/names");


console.log(players.north.status());
console.log(players.south.status());


players.north.useSkill(0,players.south);
players.south.useSkill(0,players.north);

console.log(players.north.status());
console.log(players.south.status());