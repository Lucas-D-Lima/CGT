class Build {
    constructor(gridSize, color) {
        this.gridSize = gridSize || 20;
        this.blockColor = color || "black"
    }
    setColor(color){
        this.blockColor = color;
    }
    setSprite(sprite){
        this.sprite = sprite;
    }
    grid(position) {
        return (position-(position%this.gridSize))
    }
    newBlock(e){
        ctx.drawImage(this.sprite, this.grid(e.offsetX), this.grid(e.offsetY))
    }
}