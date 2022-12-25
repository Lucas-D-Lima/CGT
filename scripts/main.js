const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const player = new Player();
const build = new Build()

document.addEventListener('keydown', (e)=>{
    if(e.key=== 's' ){
        player.move(0, 10)
    }
    if(e.key=== 'w' ){
        player.move(0, -10)
    }
    if(e.key=== 'a' ){
        player.move(-10, 0)
    }
    if(e.key=== 'd' ){
        player.move(10, 0)
    }
})

canvas.addEventListener('click', (e)=>{
        build.newBlock(e)
})