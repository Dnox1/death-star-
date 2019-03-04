function Game(canvadId) {
  this.canvas = document.getElementById(canvadId);
  this.ctx = this.canvas.getContext("2d");
  this.fps = 60;


  this.reset();
}

Game.prototype.start = function() {
  this.interval = setInterval(function() {
    this.clear();

    this.framesCounter++;

    // controlamos que frameCounter no sea superior a 1000
    if (this.framesCounter > 1000) {
      this.framesCounter = 0;
    }

    // controlamos la velocidad de generación de obstáculos
    if (this.framesCounter % 100 === 0) {
      this.generateObstacle();
    } 

    if (this.framesCounter % 200 === 0) {
      this.generateTorret();
    }

    this.score += 0.01;
    if (this.score >= 10) {
      this.gameWin();
    }

    this.moveAll();
    this.draw();

    // eliminamos obstáculos fuera del canvas
    this.clearObstacles();

    if (this.isCollision()) {
      this.gameOver();
    }
    if (this.isCollisionTorret()) {
      this.gameOver();
    }
  }.bind(this), 1000 / this.fps);
};

Game.prototype.stop = function() {
  clearInterval(this.interval);
};

Game.prototype.resume = function() {
  setInterval(this.interval);
};

Game.prototype.gameOver = function() {
  this.stop();
  
  if(confirm("GAME OVER. Play again?")) {
    this.reset();
    this.start();
  }
};

Game.prototype.gameWin = function() {
    this.stop();
    alert("Tira la Bomba!");
};

Game.prototype.reset = function() {
  this.background = new Background(this);
  this.player = new Player(this);
  this.framesCounter = 0;
  this.obstacles = [];
  this.torret = [];
  this.score = 0;
};

Game.prototype.isCollision = function() {
  // colisiones genéricas 
  // (p.x + p.w > o.x && o.x + o.w > p.x && p.y + p.h > o.y && o.y + o.h > p.y )
  return this.obstacles.some(function(obstacle) {
    return (
      ((this.player.x + this.player.w) >= obstacle.x &&
       this.player.x < (obstacle.x + obstacle.w) &&
       this.player.y + (this.player.h) >= obstacle.y &&
       (obstacle.y + obstacle.h) > this.player.y)
    );
  }.bind(this));
};

Game.prototype.isCollisionTorret = function() {
  // colisiones genéricas 
  // (p.x + p.w > o.x && o.x + o.w > p.x && p.y + p.h > o.y && o.y + o.h > p.y )
  return this.torret.some(function(torret) {
    return (
      ((this.player.x + this.player.w) >= torret.x &&
       this.player.x < (torret.x + torret.w) &&
       this.player.y + (this.player.h) >= torret.y &&
       (torret.y + torret.h) > this.player.y)
    );
  }.bind(this));
};

Game.prototype.clearObstacles = function() {
  this.obstacles = this.obstacles.filter(function(obstacle) {
    return obstacle.x >= 0;
  });
};

Game.prototype.clearTorret = function() {
  this.torret = this.torret.filter(function(torret) {
    return torret.x >= 0;
  });
};

Game.prototype.generateObstacle = function() {
  this.obstacles.push(new Obstacle(this));
};

Game.prototype.generateTorret = function() {
  this.torret.push(new Torret(this));
};

Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}; 

Game.prototype.draw = function() {
  this.background.draw();
  this.player.draw();
  this.obstacles.forEach(function(obstacle) { obstacle.draw(); });
  this.torret.forEach(function(torret) { torret.draw(); });
  this.drawScore();  
};

Game.prototype.moveAll = function() {
  this.background.move();
  this.player.move();
  this.obstacles.forEach(function(obstacle) { obstacle.move(); });
  this.torret.forEach(function(torret) { torret.move(); });

};

Game.prototype.drawScore = function() {
  this.ctx.font = "30px sans-serif";
  this.ctx.fillStyle = "orange";
  this.ctx.fillText(Math.floor(this.score), 50, 50);
}