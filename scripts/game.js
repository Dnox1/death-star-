function Game(canvadId) {
  this.canvas = document.getElementById(canvadId);
  this.ctx = this.canvas.getContext("2d");
  this.fps = 60;
  this.games = 0
  this.name = document.getElementById("name").value;
  this.reset();
  // this.listenKeys()

}

Game.prototype.start = function () {
  this.games++;
  this.firstTorret = 1000 //10 segundos hasta la aparición de la primera Torreta
  this.fireTorret = 200 // cadencia de disparo de las torres
  this.interval = setInterval(function () {
    this.clear();
    this.framesCounter++;

    // controlamos que frameCounter no sea superior a 1000
    if (this.framesCounter > 10000) {
      this.framesCounter = 0;
    }

    // controlamos la velocidad de generación de obstáculos
    if (this.framesCounter % 100 === 0) {
      this.generateObstacle();
    }

    if (this.framesCounter > this.firstTorret && this.framesCounter % 200 === 0) {
      this.generateTorret();
    }

    if (this.framesCounter % this.fireTorret === 0) {
      this.shootTorret();
    }

    this.score += 0.01;
    if (this.score >= 5) {
      this.gameWin();
    }

    this.moveAll();
    this.draw();

    // eliminamos obstáculos fuera del canvas
    this.clearObstacles();

    if (this.isCollision(this.player, this.obstacles)) {
      this.gameOver();
    }
    // iscollision(this.player, this.torret);
    if (this.isCollision(this.player, this.torret)) {
      this.gameOver();
    }

    if (this.isCollision(this.player, this.darthvader.arrayBullets)) {
      this.gameOver();
    }

    // if (this.isCollision(this.obstacles, this.darthvader.arrayBullets)) {
    //   this.gameOver();
    // }

    // this.obstacles.forEach(function (obstacle) {
    //   if (this.isCollision(this.darthvader.arrayBullets, obstacle)) {
    //     this.gameOver();
    //   }
    // }.bind(this));

    
    // this.darthvader.arrayBullets.forEach(function (dBullet) {
    //   if (this.isCollision(this.obstacles, this.darthvader.arrayBullets.dBullet)) {
    //     this.gameOver();
    //   }
    // }.bind(this));

    this.torret.forEach(function (torret) {
      if (this.isCollision(this.player, torret.bulletstorret)) {
        this.gameOver();
      }
    }.bind(this));


    // this.torret.forEach(function (darthvader.arrayBullets) {
    //   if (this.isCollision(this.player, this.darthvader.arrayBullets)) {
    //     this.gameOver();
    //   }
    // }.bind(this));


    // // this.torret.forEach(function(torret) {
    if (this.isCollision(this.player.bullets, this.torret)) {
      this.score++;
    }
    // console.log("colision");
    // this.destroyTorret(this.torret);
    // }
    // }.bind(this));
    

  }.bind(this), 1000 / this.fps);
};


Game.prototype.stop = function () {
  clearInterval(this.interval);
};

Game.prototype.resume = function () {
  setInterval(this.interval);
};

Game.prototype.gameOver = function () {
  this.stop();
  ranking.push({
    name: this.name,
    score: Math.floor(this.score)
  });
  printRanking();
  document.getElementById("start-button").className = 'active';
  if (confirm("GAME OVER." + "\n" + this.name + " Your Score is: " + Math.floor(this.score) + "\n" + "Play again?")) {
    // this.savePunctuation();
    this.reset();
    this.start();
  }
};

Game.prototype.gameWin = function () {
  this.stop();
  alert("YOU WON!!!" + "\n" + "you have destroyed" + "\n" + "the star of death");
  document.getElementById("start-button").className = 'active';

};

Game.prototype.reset = function () {
  document.getElementById("start-button").className = 'noactive';
  this.background = new Background(this);
  this.player = new Player(this);
  this.darthvader = new DarthVader(this);

  // this.player.addEventListener("keydown", this.player.setListeners(), false);
  // this.player.addEventListener("keyup", this.player.setListenersup(), false);

  // this.player.addEventListener("keydown", this.darthvader.setListeners(), false);
  // this.player.addEventListener("keyup", this.darthvader.setListenersup(), false);
  this.listenKeys();
  this.framesCounter = 0;
  this.obstacles = [];
  this.torret = [];
  this.score = 0;
};

// if (this.pause = true) {
//   this.stop();
// } else if (this.pause = false) {
//   this.reset();
// }
var RIGHT_KEY = 39
var UP_KEY = 38
var DOWN_KEY = 40
var LEFT_KEY = 37
var SPACE = 32

var PAUSE = 80

var D_KEY = 68
var W_KEY = 87
var S_KEY = 83
var A_KEY = 65
var Z_KEY = 90



Game.prototype.listenKeys = function () {
  document.addEventListener('keydown', function(e) {
    var myKeyCode = e.keyCode;
    switch(myKeyCode) {
      case 39:
      this.player.isMovingRight = true;
      break
      case 37:
      this.player.isMovingLeft = true;
      break
      case 40:
      this.player.isMovingDown = true;
      break
      case 38:
      this.player.isMovingUp = true;
      break
      case 32:
      this.player.shoot();
      break
      case 68:
      this.darthvader.isMovingRight = true;
        break
      case 65:
      this.darthvader.isMovingLeft = true;
        break
      case 87:
      this.darthvader.isMovingUp = true;
        break
      case 83:
      this.darthvader.isMovingDown = true;
        break
      case 90:
      if (this.darthvader.isMovingRight == false &&  this.darthvader.isMovingLeft == false && this.darthvader.isMovingUp == false &&  this.darthvader.isMovingDown == false) {
      this.darthvader.shoot();}
        break
      case 80:
        alert("Game Paused");
        break      
    }
  }.bind(this))

  document.addEventListener('keyup', function(e) {
    var myKeyCode = e.keyCode;
    switch(myKeyCode) {
      case 39:
      this.player.isMovingRight = false;
      break
      case 37:
      this.player.isMovingLeft = false;
      break
      case 40:
      this.player.isMovingDown = false;
      break
      case 38:
      this.player.isMovingUp = false;
      break
      
      case 68:
      this.darthvader.isMovingRight = false;
        break
      case 65:
      this.darthvader.isMovingLeft = false;
        break
      case 87:
      this.darthvader.isMovingUp = false;
        break
      case 83:
      this.darthvader.isMovingDown = false;
        break
      
      // case 80:
      //   if (this.game.pause = true) { 
      //     this.pause = false;
      //   } else {this.pause = false};
      // break      
    }

  }.bind(this))
}


// Game.prototype.setListener = function () {
//   document.onkeydown = function (event) {
//     if (event.keyCode === RIGHT_KEY) {
//       this.player.right();
//     } else {this.player.img.frameIndex = 0}

//     if (event.keyCode === LEFT_KEY && this.player.x > 0) {
//       this.player.x -= 10;
//       this.player.img.frameIndex = 2
//     } else if (event.keyCode === UP_KEY && this.player.y > 100) {
//       this.player.y -= 10;
//     } else if (event.keyCode === DOWN_KEY && this.player.y < 500) {
//       this.player.y += 20;
//     } else if (event.keyCode == SPACE) {
//       this.player.shoot();
//     }
//     // DarkVader
//     if (event.keyCode === D_KEY && this.darthvader.x < this.canvas.width) {
//       this.darthvader.right();
//     } else {this.darthvader.img.frameIndex = 0}
//     if (event.keyCode === A_KEY && this.darthvader.x > 0) {
//       this.darthvader.x -= 5;
//       this.darthvader.img.frameIndex = 2
//     } else if (event.keyCode === W_KEY && this.darthvader.y > 600) {
//       this.darthvader.y -= 5;
//     } else if (event.keyCode === S_KEY && this.darthvader.y < 800) {
//       this.darthvader.y += 10;
//     } else if (event.keyCode == Z_KEY) {
//       this.darthvader.shoot();
//     } else if (event.keyCode == PAUSE) {
//       if (confirm("Game Paused, Resume?")) {}
//     }
//   }.bind(this);
//     document.onkeyup = function (event) {
//       if (event.keyCode === RIGHT_KEY || event.keyCode === LEFT_KEY) {
//         this.player.img.frameIndex = 0
//       } else if (event.keyCode === D_KEY || event.keyCode === A_KEY) {
//         this.darthvader.img.frameIndex = 0
//       }
//     }.bind(this);  
// }












Game.prototype.isCollision = function (player, obstacles) {
  //console.log(this.bulletstorret + "is collision");
  // colisiones genéricas 
  // (p.x + p.w > o.x && o.x + o.w > p.x && p.y + p.h > o.y && o.y + o.h > p.y )
  return obstacles.some(function (obstacle) {
    return (
      ((player.x + player.w) >= obstacle.x &&
        player.x <= (obstacle.x + obstacle.w) &&
        (player.y + player.h) >= obstacle.y &&
        (obstacle.y + obstacle.h) >= player.y)
    );

  }.bind(this));
};

// Game.prototype.isCollisionTorret = function() {
//   // colisiones genéricas 
//   // (p.x + p.w > o.x && o.x + o.w > p.x && p.y + p.h > o.y && o.y + o.h > p.y )
//   return this.torret.some(function(torret) {
//     return (
//       ((this.player.x + this.player.w) >= torret.x &&
//        this.player.x <= (torret.x + torret.w) &&
//        (this.player.y + this.player.h) >= torret.y &&
//        (torret.y + torret.h) >= this.player.y)
//     );
//   }.bind(this));
// };

Game.prototype.clearObstacles = function () {
  this.obstacles = this.obstacles.filter(function (obstacle) {
    return obstacle.x >= 0;
  });
};

Game.prototype.clearTorret = function () {
  this.torret = this.torret.filter(function (torret) {
    return torret.x >= 0;
  });
};
// Game.prototype.savePunctuation = function() {
//    this.function.push(this.name, this.score);
// };

Game.prototype.generateObstacle = function () {
  this.obstacles.push(new Obstacle(this));

};

Game.prototype.generateTorret = function () {
  this.torret.push(new Torret(this));
};

// Game.prototype.destroyTorret = function() {
//   this.torret = this.bullets.filter(function(torret) {
//     return torret = "null";
//   });
// };

Game.prototype.shootTorret = function () {
  if (this.torret && this.torret.length > 0) {
    this.torret.forEach(function (torret) {
      torret.shoot()
    });
  }
};


Game.prototype.clear = function () {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Game.prototype.draw = function () {
  this.background.draw();
  this.obstacles.forEach(function (obstacle) {
    obstacle.draw();
  });
  this.drawScore();
  this.torret.forEach(function (torret) {
    torret.draw();
  });
  this.player.draw();
  this.darthvader.draw();

};

Game.prototype.moveAll = function () {
  this.background.move();
  this.obstacles.forEach(function (obstacle) {
    obstacle.move();
  });
  this.torret.forEach(function (torret) {
    torret.move();
  });
  this.player.move();
  this.player.moveP();
  this.darthvader.move();
  this.darthvader.moveP();


};

Game.prototype.drawScore = function () {
  this.ctx.font = "30px sans-serif";
  this.ctx.fillStyle = "orange";
  this.ctx.fillText(Math.floor(this.score), 50, 50);
}