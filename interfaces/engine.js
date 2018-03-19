const names = require("../objects/names");

class Engine{
    constructor(deck,players){
        this.deck = deck;
        this.players = players;
    }
    damage(target){
        if(target.isAlive()){
            if(!target.isShielded){
                target.damage(1);
                console.log(target.name + " got 1 damage!");
            }
            else{
                console.log(target.name + " is shielded and took no damage!");
            }
        }
    }
    twoDamage(target){
        if(target.isAlive()){
            if(!target.isShielded){
                target.damage(2);
                console.log(target.name + " got 1 damage!");
            }
            else{
                target.damage(1);
                console.log(target.name + " is shielded and took only 1 damage!");
            }
        }
    }
    burn(target){
        if(target.isAlive()){
            if(!target.isProtected){
                target.loseMana(1);
                console.log(target.name + " burnt 1 mana!");
            }
            else{
                target.damage(1);
                console.log(target.name + " is protected and burnt no mana!");
            }
        }
    }
    exhaust(target){
        if(target.isAlive()){
            target.isExhaust = true;
            console.log(target.name + " is exhausted!");
        }
    }
    heal(target){
        if(target.isAlive()){
            if(!this.hasFullHealth){
                target.heal();
                console.log(target.name + " restores 1 health!");
            }
            else{
                console.log(target.name + " has already full health!");
            }
        }
    }
    silence(target){
        if(target.isAlive()){
            target.isSilenced = true;
            console.log(target.name + " is silenced!");
        }
    }
    turnStart(){
        console.log("===New room============");
        for(let player in this.players){
            if(this.players.hasOwnProperty(player)){
                this.players[player].isExhaust = false;
                this.players[player].isShielded = false;
                this.players[player].isProtected = false;
                this.players[player].gainMana(1);
            }
        };
    }
    playersStatus(){
        console.log("Players status:");
        console.log(this.players.north.status());
        console.log(this.players.east.status());
        console.log(this.players.south.status());
        console.log(this.players.west.status());
    }
    sealStatus(room){
        if(room.seal) console.log("The " + names.seals[room.seal] + " seal is active!");
        else console.log("No seal on this room!");
    }
    playTurn(){
        this.turnStart();
        const room = this.deck.draw();
        this.sealStatus(room);
        this[room.north](this.players.north);
        this[room.east](this.players.east);
        this[room.south](this.players.south);
        this[room.west](this.players.west);
        console.log("\n");
        this.playersStatus();
        console.log("\n");
    }
    playersAction(turn){
        const actions = [
            //turn 1
            {
                n: {skill: 0, target: "e"},
                e: {},
                s: {skill: 0, target: "n"},
                w: {}
            },
            //turn 2
            {
                n: {skill: 1, target: "e"},
                e: {},
                s: {skill: 0, target: "n"},
                w: {}
            },
            //turn 3
            {
                n: {skill: 0, target: "e"},
                e: {},
                s: {skill: 0, target: "n"},
                w: {}
            },
            //turn 4
            {
                n: {skill: 0, target: "e"},
                e: {},
                s: {skill: 0, target: "n"},
                w: {}
            }
        ]

        if(actions[turn]){
            const direction = {
                n : "north",
                e : "east",
                s : "south",
                w : "west"
            }
            for(let p in direction){
                if(direction.hasOwnProperty(p)){
                    if(actions[turn][p]!==undefined){
                        const _source = this.players[direction[p]];
                        const _skill = actions[turn][p].skill;
                        const _target = this.players[direction[actions[turn][p].target]];
                        if(actions[turn][p]){
                            if(Object.keys(actions[turn][p]).length > 0 && actions[turn][p].constructor === Object){
                                const res = _source.useSkill(_skill, _target);
                                if(res == "exhaust") console.log(_source.name + " is exhaust and can't use skills!");
                                else if(res == "no_mana") console.log(_source.name + " doesn't have enough mana!");
                                else console.log(res);
                            }
                            else{
                                console.log(_source.name + " does nothing");
                            }
                        } 
                    }
                }
            }
        }
    }
    play(){
        let c = 0;
        while(!this.deck.isEmpty()){
            console.log("Players actions:");
            this.playersAction(c);
            console.log("\n");
            console.log("Room number " + (++c));
            this.playTurn();
        };
    }
}

module.exports = Engine;