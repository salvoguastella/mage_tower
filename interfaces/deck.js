class Deck{
    constructor(){
        this.rooms = [];
    }
    addRoom(room){
        this.rooms.push(room);
    }
    shuffle(){
        var j, x, i;
        for (i = this.rooms.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = this.rooms[i];
            this.rooms[i] = this.rooms[j];
            this.rooms[j] = x;
        }
    }
    isEmpty(){
        return this.rooms.length <= 0;
    }
    draw(){
        const room = this.rooms.splice(0,1);
        //this.rooms.shift();
        console.log(this.rooms.length + " rooms left...");
        return room[0];
    }
    reveal(){
        return this.rooms[0];
    }
    rotateNext(steps=1){
        for(var i = 0; i < steps; i++){
            this.rooms[0].rotate();
        }
    }
    swapNext(){
        if(this.size() > 0){
            const temp = this.rooms[0];
            this.rooms[0] = this.rooms[1];
            this.rooms[1] = temp;
        }
    }
    size(){
        return this.rooms.length;
    }
}

module.exports = Deck;