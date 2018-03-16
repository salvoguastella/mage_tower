const Skill = require("../interfaces/skill");

//skills definition
const skills = [
    new Skill("Lesser Heal", 3, function(target){
        console.log("Restore 1 Health to "+target.name);
        target.heal();
    }),
    new Skill("Conjure", 1, function(target){
        console.log("Restore 1 Mana to "+target.name);
        target.gainMana(1);
    })
]

module.exports = skills;