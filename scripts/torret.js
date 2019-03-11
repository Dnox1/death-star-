function Torret(game) {
  this.game = game;

  this.w = 50;
  this.h = 50;

  this.dx = 0;
  this.dy = 2;

  this.x = 0;
  this.y = 0;

  this.xt = 10
  this.xf = 530


  // this.x = this.game.canvas.width;
  // this.y = this.game.player.y0 - this.game.player.h - this.h - 5;
}  


Torret.prototype.draw = function() {
  this.game.ctx.fillStyle = "grey";
  this.game.ctx.fillRect(this.xt, this.y, 50, 50);
  this.game.ctx.fillStyle = "black";
  this.game.ctx.fillRect(this.xt + 5, this.y + 5, 40, 40);
  this.game.ctx.fillStyle = "grey";
  this.game.ctx.fillRect(this.xt + 10, this.y + 10, 30, 30);
  this.game.ctx.fillStyle = "black";
  this.game.ctx.fillRect(this.xt + 15, this.y + 15, 20, 20);
  this.game.ctx.fillStyle = "yellow";
  this.game.ctx.fillRect(this.xt + 21, this.y + 21, 25, 2);
  this.game.ctx.fillRect(this.xt + 21, this.y + 27, 25, 2);

  this.game.ctx.fillStyle = "grey";
  this.game.ctx.fillRect(this.xf, this.y, 50, 50);
  this.game.ctx.fillStyle = "black";
  this.game.ctx.fillRect(this.xf + 5, this.y + 5, 40, 40);
  this.game.ctx.fillStyle = "grey";
  this.game.ctx.fillRect(this.xf + 10, this.y + 10, 30, 30);
  this.game.ctx.fillStyle = "black";
  this.game.ctx.fillRect(this.xf + 15, this.y + 15, 20, 20);
  this.game.ctx.fillStyle = "yellow";
  this.game.ctx.fillRect(this.xf + 5, this.y + 21, 25, 2);
  this.game.ctx.fillRect(this.xf + 5, this.y + 27, 25, 2);

  this.bulletstorret.forEach(function(bullet) {
    bullet.draw();
    bullet.move();
  });
}
  // this.game.ctx.fillStyle = "grey";
  // this.game.ctx.fillRect(this.xf, this.y, 50, 50);
  // this.game.ctx.fillStyle = "black";
  // this.game.ctx.fillRect(this.xf + 5, this.y + 5, 40, 40);


Torret.prototype.move = function() {
  //this.x -= this.dx;
  this.y += this.dy;
};

Torret.prototype.shoot = function() {

  var bullet = new BulletTorrets(this.game, this.x, this.y );
  var bullet2 = new BulletTorrets(this.game, this.x + 530, this.y );

  this.bulletstorret = [];

  this.bulletstorret.push(bullet);
  this.bulletstorret.push(bullet2);
  console.log(this.bulletstorret + "shoot");
};
