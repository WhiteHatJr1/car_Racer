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
    text("Game Starts!", 130, 30);
    player.getPlayerInfo();
    if (allPlayers !== undefined){
      var displyPosition = 130;
      for (var p in allPlayers){
        if (p === "player" + player.Index)
        fill(255, 0,0);
        else 
        fill("black");

        displayPosition += 20;
      }
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
    }
  }
}
