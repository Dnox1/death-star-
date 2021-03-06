// que la imagen de la nave cambie solo si se toca la tecla 

function Player(game) {
  this.game = game;
  // laterales
  this.x = this.game.canvas.width * 0.45;
  
  // guardar posición original (suelo)
  this.y0 = this.game.canvas.height * 0.6;
  this.y = this.y0;

  this.img = new Image();
  this.img.src = './images/wing-x.png';
  
  // número de imágenes diferentes
  // 
  this.img.frames = 3;
  this.img.frameIndex = 0;

  // medidas de la imagen a representar en el canvas
  this.w = 44;
  this.h = 40;

  this.vx = 1;
  

  this.bullets = [];

  // this.setListeners();
}

// // var TOP_KEY = 38;
// var RIGHT_KEY = 39
// var UP_KEY = 38
// var DOWN_KEY = 40
// var LEFT_KEY = 37
// var SPACE = 32
// var PAUSE = 80

Player.prototype.draw = function() {
  // Documentación drawImage:
  // https://developer.mozilla.org/es/docs/Web/API/CanvasRenderingContext2D/drawImage
  this.game.ctx.drawImage(
    this.img,
    this.img.frameIndex * Math.floor(this.img.width / this.img.frames),
    0,
    Math.floor(this.img.width / this.img.frames),
    this.img.height,
    this.x,
    this.y,
    this.w,
    this.h
  );

  this.animateImg();
  

  this.bullets = this.bullets.filter(function(bullet) {
    return bullet.y > 0;
  }.bind(this));

  this.bullets.forEach(function(bullet) {
    bullet.draw();
    bullet.move();
  });
};

Player.prototype.moveP = function() {

  if(this.isMovingRight === true && this.x+this.w < this.game.canvas.width) { 
    this.img.frameIndex = 1; 
    this.x += 10; 
  } 
  if(this.isMovingLeft  === true && this.x > 0) { 
    this.x -= 10; 
    this.img.frameIndex = 2; 
  }
  if(this.isMovingUp    === true && this.y > 100) { this.y -= 5; }
  if(this.isMovingDown  === true && this.y < 500) { this.y += 5; }
  if(this.isMovingRight === false) { this.img.frameIndex = 0 }
  if(this.isMovingLeft  === false) { this.img.frameIndex = 0 }
}
// }
// Player.prototype.right = function() {
//   if (this.x < this.game.canvas.width) {
//   this.x += 20;
//   this.img.frameIndex = 1
  // }

//     } else if (event.keyCode === LEFT_KEY && this.x > 0) {
//       this.x -= 10;
//       this.img.frameIndex = 2
//     } else if (event.keyCode === UP_KEY && this.y > 100) {
//       this.y -= 10;
//     } else if (event.keyCode === DOWN_KEY && this.y < 500) {
//       this.y += 20;
//     } else if (event.keyCode == SPACE) {
//       this.shoot();
//     } else if (event.keyCode == PAUSE) {
//       if(confirm("Game Paused, Resume?")) { }
//     }
//   }.bind(this);
  
// Player.prototype.setListenersup = function(event) {
//     if (event.keyCode === RIGHT_KEY || event.keyCode === LEFT_KEY) {
//     this.img.frameIndex = 0      
//     }
//   }.bind(this);



Player.prototype.shoot = function() {
  var bullet = new Bullet(this.game, this.x, this.y - this.h );

  this.bullets.push(bullet);
};

Player.prototype.animateImg = function() {
  // se va cambiando el frame. Cuanto mayor es el módulo, mas lento se mueve el personaje
  // this.img.frameIndex = 0;
  // if (event.keyCode === RIGHT_KEY) {
  //   this.img.frameIndex = 1;
  // } else if (event.keyCode === LEFT_KEY) {
  //     this.img.frameIndex = 2;
  // }
  // this.img.frameIndex = 0;
  // if (this.game.framesCounter % 60 === 0) {
  //   this.img.frameIndex += 1;

    // Si el frame es el último, se vuelve al primero
   // if (this.img.frameIndex > 2) this.img.frameIndex = 0;
  }
;

Player.prototype.move = function() {
  // Aumenta la velocidad en el eje y.
  //var gravity = 0.4;

  // solo salta cuando el personaje está en el suelo
  // if (this.y >= this.y0) {
  //   this.vy = 1;
  //   this.y = this.y0;
  // } else {
  //   this.vy += gravity;
  //   this.y += this.vy;
  // }
  if ((this.x + this.h) >= this.game.canvas.width) {
    this.x = this.game.canvas.width - this.h}
};