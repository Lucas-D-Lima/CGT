class Build {
    constructor(gridSize, color) {
        this.gridSize = gridSize || 20;
        this.blockColor = color || "black"
    }
    setColor(color){
        this.blockColor = color;
        ctx.fillStyle = this.blockColor
    }
    setSprite(sprite){
        this.sprite = sprite;
    }
    grid(position) {
        return (position-(position%this.gridSize))
    }
    newBlock(e){
        ctx.fillRect(this.grid(e.offsetX), this.grid(e.offsetY), this.gridSize, this.gridSize)
    }
}