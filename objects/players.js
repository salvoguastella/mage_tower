const Player = require("../interfaces/player");

const players = {
    north: new Player("Archimedes"),
    east: new Player("Raxatras"),
    south: new Player("Keltheris"),
    west: new Player("Nefibius")
}

module.exports = players;