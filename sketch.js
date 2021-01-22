var canva;
var quiz;
var gameState=0;
var contestantCount;
var database;
var question;
var contestant;
var game;

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  //game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background("pink");

  if(gameState === 1){
    clear();
    game.play();
  }
  
}
