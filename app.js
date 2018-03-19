const deck = require("./objects/deck");
const players = require("./objects/players");
const names = require("./objects/names");
const engine = require("./objects/engine");

/*
console.log(players.north.status());
console.log(players.south.status());
console.log("\n");

players.north.useSkill(0,players.south);
console.log(players.north.status());
console.log(players.south.status());
console.log("\n");

players.south.useSkill(0,players.north);
console.log(players.north.status());
console.log(players.south.status());
console.log("\n");

players.north.useSkill(1,players.south);
console.log(players.north.status());
console.log(players.south.status());
*/
engine.play();