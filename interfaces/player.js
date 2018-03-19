class Player{
    constructor(name, health = 5, mana = 4, maxHealth = 5, maxMana = 4){
        this.name = name;
        this.health = health;
        this.mana = mana;
        this.maxMana = maxMana;
        this.maxHealth = maxHealth;
        this.isShielded = false;
        this.isProtected = false; //resistence to Burn
        this.isExhaust = false;
        this.isSilenced = false;
        this.skills = [];
    }

    addSkill(skill){
        this.skills.push(skill);
    }

    useSkill(index, target){
        if(!this.isExhaust){
            if(this.skills[index].cost <= this.mana){
                this.mana = this.mana - this.skills[index].cost;
                return this.skills[index].effect(this, target);
            }
            else return "no_mana";
        }
        else return "exhaust";
    }
  
    hasFullHealth(){
        return (this.health >= this.maxHealth);
    }

    hasFullMana(){
        return (this.mana >= this.maxMana);
    }

    changeHealth(amount){
        if(amount < 0){
            if(this.health < Math.abs(amount)) this.health = 0;
            else this.health+=amount; 
        }
        else{
            if(this.health + amount > this.maxHealth) this.health = this.maxHealth;
            else this.health+=amount;
        }
    }

    changeMana(amount){
        if(amount < 0){
            if(this.mana < Math.abs(amount)) this.mana = 0;
            else this.mana+=amount; 
        }
        else{
            if(this.mana + amount > this.maxMana) this.mana = this.maxMana;
            else this.mana+=amount;
        }       
    }

    damage(amount){
        this.changeHealth(-amount);
    }

    heal(){
        this.changeHealth(1);
    }

    loseMana(amount){
        this.changeMana(-amount);
    }

    gainMana(amount){
        this.changeMana(amount);
    }


    isAlive(){
        return this.health > 0;
    }

    status(){
        var string = this.name;
        if(this.isAlive()) string+= ` | ${this.health} HP, ${this.mana} MP`;
        else string+=" | Dead";
        if(this.isShielded) string+=" | Shield";
        if(this.isProtected) string+=" | Fortitude";
        if(this.isExhaust) string+=" | Exhausted";
        if(this.isSilenced) string+=" | Silenced";

        return string;
    }

}

module.exports = Player;