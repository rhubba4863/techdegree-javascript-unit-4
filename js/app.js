/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/*
 *app.js to create a new instance of the `Game` class and add event listeners for the start
 *button and onscreen keyboard buttons.*/

// const phrase = new Phrase(); game = new Game();

/*
 * 4) Updating the app.js file, with "startNewGame"
 */

let game;
let start

const startGameButton = document.getElementById('btn__reset');
const keyRowButtons = document.querySelectorAll('.key');

//Add an event listener for clicking "Start Game"
startGameButton.addEventListener('click', () => {
  resetGame();
  game = new Game();
  game.startGame();
  console.log("HELP");
})

//Add an event listener for all 26 letter buttons
keyRowButtons.forEach(button => {
  button.addEventListener('click', (e) => {
      game.handleInteraction(e.target);
  })
})

/*
 * 5) Resetting the gameboard between games.
 */
//I've added this fucntion to reset all the right guesses and wrong once, the showed letters and the lives
function resetGame(){
  const heartImages = document.querySelectorAll('.tries img');
  heartImages.forEach(image => image.src = 'images/liveHeart.png');

  const divBoxes = document.getElementById('phrase');
  const ul = divBoxes.firstElementChild;
  while (ul.firstChild){
      ul.removeChild(ul.firstChild);
  }

  const keys = document.getElementsByClassName('key');

  //console.log(keyPressed)

  for(let i = 0; i < keys.length; i++){
    keys[i].disabled = false;
    keys[i].classList.remove('wrong');
    keys[i].classList.remove('chosen');
  }

}