window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    var game = new Game("canvas");
    document.getElementById("start-button").className = 'noactive';
  game.start();
  }}
