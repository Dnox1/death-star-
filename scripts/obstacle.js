function Obstacle(game) {
  this.game = game;

  this.w = Math.floor((Math.random()*200)+50);
  this.h = 40;

  this.dx = 10;
  this.dy = 5;

  this.x = 0;
  this.y = 0;

  this.x = Math.floor((Math.random()*this.game.canvas.width-this.w-20)+20)
  // this.x = this.game.canvas.width;
  // this.y = this.game.player.y0 - this.game.player.h - this.h - 5;
}

Obstacle.prototype.draw = function() {
  this.game.ctx.fillStyle = "black";
  this.game.ctx.fillRect(this.x, this.y, this.w, this.h);
};

Obstacle.prototype.move = function() {
  //this.x -= this.dx;
  this.y += this.dy;
};