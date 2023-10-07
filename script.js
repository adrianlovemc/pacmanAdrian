const canvas = document.querySelector("canvas");
const ctx = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

class Player{
    constructor(pos){
        this.pos = pos;
        this.radius = 40;
    }
    draw(){
        ctx.beginPath()
        ctx.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2);
        ctx.stroke()
        ctx.fill()
        ctx.closePath()
    }
}

const player = new Player({x:100, y:100})
player.draw()
document.addEventListener('keypress', (e)=>{
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    if (e.key == 'w'){
        player.pos.y -= 10;
    }
    else if (e.key == 'a'){
        player.pos.x -= 10;
    }
    else if (e.key == 's'){
        player.pos.y += 10;
    }
    else if (e.key == 'd'){
        player.pos.x += 10;
    }
    ctx.fillStyle = '#000000';
    player.draw();
})