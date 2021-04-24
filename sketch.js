var database;
var gameState=0,playerCount=0;
var game,player,form;
var allPlayers;
var cars,car1,car2,car3,car4;




function setup(){
        createCanvas(displayWidth,displayHeight);
        database=firebase.database()

    game=new Game()
    game.getstate()
    game.start()
    
   

}

function draw(){
  if(playerCount===4){
      game.update(1)
  }
  if(gameState===1){
      clear()
      game.play()
  }

}

