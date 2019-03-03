function Bullet(game, x, y) {
  this.game = game;

  this.x = x;
  this.y = y;

  //this.r = 15;
  this.w = 5;
  this.h = 10;
  this.vx = 0;
  this.vy = -5;

  //this.gravity = 0;
}

Bullet.prototype.draw = function() {
  this.game.ctx.beginPath();
  this.game.ctx.fillStyle = "yellow";
  this.game.ctx.fillRect(this.x, this.y, this.w, this.h);
  // this.game.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
  //this.game.ctx.fill();
  this.game.ctx.closePath();
}

Bullet.prototype.move = function() {
  // this.x += this.vx;

  // this.vy += this.gravity; 
  this.y += this.vy;

  // if (this.y > this.game.player.y0 + this.game.player.h) {
  //   this.vy *= -1;
  // }
};