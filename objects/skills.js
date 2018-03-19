const Skill = require("../interfaces/skill");
const names = require("./names");

//skills definition
const skills = [
    new Skill("Lesser Heal", names.green, 3, function(source, target){
        target.heal();
        return source.name + " restored 1 Health to "+target.name;
    }),
    new Skill("Conjure", names.green, 1, function(source,target){
        target.gainMana(1);
        return source.name + " restored 1 Mana to "+target.name;
    }),
    new Skill("Kleptomagic", names.blue, 0, function(source,target){
        target.loseMana(1);
        source.gainMana(1);
        return source.name + " stole 1 Mana from "+target.name;
    })
]

module.exports = skills;