class Particle {
    constructor(pos, vel, gravity = 1.1, friction = 1.1){
        //beginPos for loops
        this.bx = pos.x;
        this.by = pos.y;
        //updated variables
        this.x = pos.x;
        this.y = pos.y;
        this.xv = vel.x;
        this.yv = vel.y;
        this.friction = friction;
        this.gravity = gravity;
        this.time = -1;
    }
    update() {
        this.x += this.xv;
        this.y += this.yv;

        this.xv /= this.friction;
        this.yv += this.gravity;
    }
    draw(){
        size = tween(this.size1, this.size2, this.playtime).
        ctx.fillRect(-size1/2, -size1/2)
    }
}

class Emmiter {
    constructor(){}
}