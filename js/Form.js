class Form {
  constructor() {
    this.input = createInput("Name");
    this.title = createElement('h2');
    this.greeting = createElement('h3');
    this.button = createButton('Play');
  }

  hide(){
    this.greeting.hide();
    this.title.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
    
    this.title.html("Car Racing Game");
    this.title.position((displayWidth-50)/2, displayHeight/7);
    
    this.input.position((displayWidth-50)/2, displayHeight/4);
    this.button.position((displayWidth+30)/2, displayHeight/3.5);

    this.button.mousePressed(() => {
      this.input.hide();
      this.button.hide();

       player.name = this.input.value();
      
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
    
      this.greeting.html("Hello " + player.name )
      this.greeting.position((displayWidth-50)/2, displayHeight/4)
    });

  }
}
