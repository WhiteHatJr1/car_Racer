class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  play(){
    form.hide();
    textSize(30);
    text("Game Starts!", displayWidth/2, displayHeight/2);
    Player.getPlayerInfo();
    if (allPlayers !== undefined){
      //var displayPosition = 130;
      var index = 0; //index of the array
      var x = 0;
      var y = 300;
      for (var p in allPlayers){
        index = index + 1;

        x = x + 200;
        y = displayHeight - allPlayers[p].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;
        if (index === player.index)
        cars[index-1].shapeColor = "red";
        else 
        fill("black");

        //displayPosition += 20;
        //textSize(20);
        //text(allPlayers[p].name + ": " + allPlayers[p].distance, 50, displayPosition);
  
      }
    }
    
    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref("playerCount").once("value");
      if (playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      
      form = new Form()
      form.display();

    car1 = createSprite(100, 200, 50, 50);
    car2 = createSprite(200, 200, 50, 50);
    car3 = createSprite(300, 200, 50, 50);
    car4 = createSprite(400, 200, 50, 50);
    cars = [car1, car2, car3, car4];
    }
  }
}
