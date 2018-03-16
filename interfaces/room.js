class Room{
    constructor(n_effect,e_effect,s_effect, w_effect){
        this.north = n_effect;
        this.east = e_effect;
        this.south = s_effect;
        this.west = w_effect;
    }

    //rotate by 90deg
    rotate(){
        const temp = this.north;
        this.north = this.east;
        this.east = this.south;
        this.south = this.west;
        this.west = temp;
    }
    
}
    
module.exports = Room;