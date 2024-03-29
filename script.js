//we start the game after all  html and javscript is loaded
window.onload = function () {
    document.addEventListener("keyup", keyPush);
    canv = document.getElementById("game");
    ctx = canv.getContext("2d");
    //here we run the game function every 1000/2 milliseconds
    setInterval(game, 1000 / 2);
  };
  //configurations
  let snakeheadX = 1;
  let snakeheadY = 1;
  let gridSize = 20;
  let foodX = 7;
  let foodY = 2;
  let moveX = 0;
  let moveY = 0;
  let snakeBody = [{ x: 1, y: 1 }];
  let snakeLength = 1;
  let score = 0;
  
  //the main game function
  function game() {
    document.getElementById("score").innerHTML = score;
    snakeheadX += moveX;
    snakeheadY += moveY;
  debugger
  //here we clean the canvas from any previous drawings
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, canv.width, canv.height);
  //here  we drow all parts of the snake  
    for (let i = 0; i < snakeBody.length; i++) {
      ctx.fillStyle = "white";
      ctx.fillRect(
        snakeBody[i].x * 1,
        snakeBody[i].y * 1,
        gridSize - 2,
        gridSize - 2
      );
      //here we check if the snake head hit the snake body
      if (snakeBody[i].x === snakeheadX && snakeBody[i].y === snakeheadY) {
        snakeLength = 1;
        score = 0;
      }
      //push the new head pusition into the array
      snakeBody.push({ x: snakeheadX, y: snakeheadY });
      // here we remove the tail of the snake
      while (snakeBody.length > snakeLength) {
        snakeBody.shift();
      }
    }
  }
  
  ////////NEW GAME//////
  ////////NEW GAME//////
  //arguments - config object
  
  //function game
  //mange the score
  //mange key press/movment
  //manage snake length
  //eating food(grow,points,new random food)
  //borders
  //collisions
  //game over
  //
  
  //function keyPush listener
  
  function keyPush(evt) {
    switch (evt.keyCode) {
      case 37:
        moveX = -1;
        moveY = 0;
        break;
      case 38:
        moveX = 0;
        moveY = -1;
        break;
      case 39:
        moveX = 1;
        moveY = 0;
        break;
      case 40:
        moveX = 0;
        moveY = 1;
        break;
    }
  }