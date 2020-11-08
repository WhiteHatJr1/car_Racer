var canvas, backgroundImage;

var gameState = 0;
var playerCount = 0;
var car1, car2, car3, car4, cars;

var database, allPlayers;

var form, player, game;


function setup(){
  canvas = createCanvas(displayWidth-50,displayHeight - 100);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if (playerCount === 4){
    game.update(1);
  }
  if (gameState === 1){
    clear();
    game.play();
  }
}

 
