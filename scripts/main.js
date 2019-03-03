window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    myRoad.start()
    // crear canvas
    // iniciar Board
    // iniciar player
    // iniciar obstaculos

  }
};
// dificultad
  var obs1 = []
  var obs2 = []
  var obs3 = []
//var rand = Math.floor((Math.random() * 1) + 1);
  var myRoad = {
      canvas : document.createElement('canvas'),
      start : function () {
      this.canvas.width = 600;
      this.canvas.height = 800;
      this.context = this.canvas.getContext('2d');
      element = document.getElementById('game-board');  
      element.appendChild(this.canvas);

      this.wingx = new Image();
      this.wingx.src ="./images/wing-x.png"
      
      this.img = new Image();
      this.img.src ="./images/bg.jpg";
      
      this.img.onload = function(){
        this.context.drawImage(this.img ,0 ,0);
        this.context.drawImage(this.wingx ,175 ,700);
        this.context.fillStyle="grey"
        this.context.fillRect(50, 100 , 200, 100);
        this.context.fillRect(350, 100, 200, 100);
        this.context.fillRect(650, 100, 200, 100);
  
      }.bind(this)
      
    

      // this.context.fillStyle="grey" 
      // this.context.fillRect(0, 0, 900, 900);
      // this.context.fillStyle="white" 
      // // for (i=0; i < this.canvas.height; i++) {
      // //   this.context.fillRect(298, 10 + i * 45, 4, 25);
      // //   this.context.fillRect(598, 10 + i * 45, 4, 25);
      // // }
      
      // for (i=0; i < 10; i++) {
      //   var rand1 = Math.floor((Math.random() * 3)+2);
      //   obs1.push(rand1)
      //   var rand2 = Math.floor((Math.random() * 5)+2);
      //   obs2.push(rand2)
      //   var rand3 = Math.floor((Math.random() * 7)+2);
      //   obs3.push(rand3)
      }
    }

    //document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    // rectangulo verde entero
    // rectangulo gris entero
    // linea recta lateral izda
    // linea recta lateral drcha
    // linea discontinua

   