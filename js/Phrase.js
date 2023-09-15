/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

//RPH: to create a Phrase class to handle the creation of phrases.

class Phrase{
  /***
 *  1)  Create Constructor
 **/
  constructor(phrase){
    this.phrase = phrase.tolowercase();
    console.log("Do ra me");
  }

  // this adds letter placeholders to the display when the game starts. 
  // Each letter is presented by an empty box
  addPhraseToDisplay(){

  }

  //checks to see if the letter selected by the player matches 
  //a letter in the phrase.
  checkLetter(letter){
    this.phrase.includes(letter);
  }

  // reveals the letter(s) on the board that matches the player's selection.
  // replace each selected element's hide CSS class with the show CSS class.
  showMatchedLetter(){
    const letterUsed = document.getElementsByClassName(letter);

    //go through the list, editing each match to show
    for (let i = 0; i < letterUsed.length; i++){
      //manipulate the class 
      letterUsed[i].classList.remove('hide');
      letterUsed[i].classList.add('show')

      //add style to catch user attentention when a match is found
      letterUsed[i].style.transform = "rotateY( 360deg )";
      letterUsed[i].style.transition = "transform 1s";
    }


  }
}

