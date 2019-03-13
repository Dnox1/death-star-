
function DarthVader(game) {
  this.game = game;
  // laterales
  this.x = this.game.canvas.width * 0.45;
  
  // guardar posición original (suelo)
  this.y0 = this.game.canvas.height * 0.9;
  this.y = this.y0;

  this.img = new Image();
  this.img.src = './images/tie.png';
  
  // número de imágenes diferentes
  // 
  this.img.frames = 3;
  this.img.frameIndex = 0;

  // medidas de la imagen a representar en el canvas
  this.w = 54;
  this.h = 50;

  this.vx = 1;

  this.arrayBullets = [];


  // this.setListeners();
}

// // var TOP_KEY = 38;
// var D_KEY = 68
// var W_KEY = 87
// var S_KEY = 83
// var A_KEY = 65
// var Z_KEY = 90
// var PAUSE = 80

DarthVader.prototype.draw = function() {
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

  this.arrayBullets = this.arrayBullets.filter(function(dBullet) {
    return dBullet.y > 0;
  }.bind(this));

  this.arrayBullets.forEach(function(dBullet) {
    dBullet.draw();
    dBullet.move();
  });
};

// DarthVader.prototype.right = function() {
//   this.x += 5;
//   this.img.frameIndex = 1      
// }

DarthVader.prototype.moveP = function() {

  if(this.isMovingRight === true) { this.x += 5; this.img.frameIndex = 1 }
  if(this.isMovingLeft  === true) { this.x -= 5; this.img.frameIndex = 2 }
  if(this.isMovingUp    === true) { this.y -= 2; }
  if(this.isMovingDown  === true) { this.y += 2; }
}
    //  else if (event.keyCode === A_KEY && this.x > 0) {
//       this.x -= 5;
//       this.img.frameIndex = 2
//     } else if (event.keyCode === W_KEY && this.y > 600) {
//       this.y -= 5;
//     } else if (event.keyCode === S_KEY && this.y < 800) {
//       this.y += 10;
//     } else if (event.keyCode == Z_KEY) {
//       this.shoot();
//     } 
//     else if (event.keyCode == PAUSE) {
//       if(confirm("Game Paused, Resume?")) {
//       }
//     }
//   }.bind(this);

// DarthVader.prototype.setListenersup = function(event) {
//   if (event.keyCode === D_KEY || event.keyCode === A_KEY) {
//   this.img.frameIndex = 0      
//   }
// }.bind(this);


DarthVader.prototype.shoot = function() {
  var dBullet = new Darthbullet(this.game, this.x, this.y - this.h);
  this.arrayBullets.push(dBullet);
};

DarthVader.prototype.animateImg = function() {
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
  };

DarthVader.prototype.move = function() {
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
  // if ((this.y >this.game.canvas.height)) {
  //    this.y = this.y--}
  if ((this.x + this.h) >= this.game.canvas.width) {
    this.x = this.game.canvas.width - this.h}
}