/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

// Game.js to create a Game class methods for starting and ending the game, handling
// interactions, getting a random phrase, checking for a win, and removing a life from the
// scoreboard.

class Game{
  constructor(){
    this.missed = 0;
    this.phrases = [
      new Phrase('Jumanji'),
      new Phrase('A Game for those who wish to find a way to leave their world behind'),
      new Phrase('Merry Christmas'),
      new Phrase('The closer we are to danger the farther we are from harm'),
      new Phrase('do or do not there is no try')
    ]

    this.activePhrase = null;
  }
  
  //Remove the entry "Overlay" thats hiding the game,
  //then begins the game by calling on the methods 
  startGame(){
    const screenOverlay = document.getElementById('overlay');
    screenOverlay.style.display = 'none';
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

  //randomly retrieves one of the phrases stored in the phrases array
  getRandomPhrase(){
    let phrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
    return phrase;
  }
  
  //after button is clicked, disable it, marking any letters found
  //and if the user possibly won/lost
  handleInteraction(button){
    button.disabled = true;
    let guessedLetter = button.textContent
    let letterFound = this.activePhrase.checkLetter(guessedLetter)

    // console.log("BB Checked Letter is:"+guessedLetter)
    // console.log("BB Found:"+letterFound)

    //check if letter is found
    if(!letterFound){
      button.classList.add('wrong')
      this.removeLife()
    }else{
      button.classList.add('chosen')
      this.activePhrase.showMatchedLetter(guessedLetter)
      //now see if the game is done
      if(this.checkForWin()){
        this.gameOver(true)
      }
    }
  }

  //remove a heart/life and end game if hearts <= 0
  removeLife(){
    let allHearts = document.querySelectorAll('.tries img')

    if(this.missed < 5){
      allHearts[this.missed].src = 'images/lostHeart.png';
      this.missed++;
    }
     
    if(this.missed == 5){
      this.gameOver(false)
    }
  }

  //check if any are still hidden from view
  checkForWin(){
    const hiddenLetterCount = document.querySelectorAll('.hide')
    return (hiddenLetterCount.length === 0);
  }

  //when game failed, remove all letters from screen
  hideAllLetters(){
    const myPhrase = document.getElementById('phrase');
    const ulChild = myPhrase.firstElementChild;
    const letterToHide = ulChild.childNodes;
    
    //const letterToHide = document.getElementsByClassName("show");

    //go through the list, editing each matching element to hide
    for (let i = 0; i < letterToHide.length; i++){
            
      //console.log("FFFF: Text: "+letterToHide[i].textContent)
      console.log("FFFF: "+letterToHide.length)

      try{
        //manipulate the class        
        letterToHide[i].classList.add('hide');
        letterToHide[i].classList.remove('show');

        //remove style when a match is found
        letterToHide[i].removeAttribute("style"); 
        // letterToHide[i].style.transform = ""; 
        // letterToHide[i].style.transition = "";
      }catch(err){
        
      } 
    }
  }
 
  // hideAllLetters(){
  //   const letterToHide = document.getElementsByClassName("show");

  //   //go through the list, editing each matching element to hide
  //   for (let i = 0; i < letterToHide.length; i++){
            
  //     //console.log("FFFF: Text: "+letterToHide[i].textContent)
  //     console.log("FFFF: "+letterToHide.length)

  //     //manipulate the class        
  //     letterToHide[i].classList.add('hide');
  //     letterToHide[i].classList.remove('show');

  //     //remove style when a match is found
  //     letterToHide[i].style.transform = ""; 
  //     letterToHide[i].style.transition = "";
  //   }
  // }

  //Reset the screen, admitting success or failure
  gameOver(results){
    let overlay = document.getElementById('overlay');
    const successMessage = document.getElementById('game-over-message');
    overlay.style.display = 'block';

    if(results){
      overlay.className = 'win';      
      successMessage.textContent = "Nice Job!!!"
    }else{
      this.hideAllLetters();
      overlay.className = 'lose'; 
      successMessage.textContent = "Lost, give it another go brother"
    }
  }
}