const Player = require("../interfaces/player");
const skills = require("../objects/skills");

const players = {
    north: new Player("Archimedes"),
    east: new Player("Raxatras"),
    south: new Player("Keltheris"),
    west: new Player("Nefibius")
}

//skill definition
players.north.addSkill(skills[0]);
players.north.addSkill(skills[2]);

players.south.addSkill(skills[1]);

module.exports = players;