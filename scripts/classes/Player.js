class Player {
    constructor(posX, posY, size) {
        this.posX = posX || 0;
        this.posY = posY || 0;
        this.size = size || 10;
    }
    move(x, y) {
        ctx.clearRect(player.posX, player.posY, player.size, player.size)
        player.posY = player.posY + y
        player.posX = player.posX + x
        ctx.fillRect(player.posX, player.posY, player.size, player.size)
    }
}