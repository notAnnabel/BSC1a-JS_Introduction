// store which character is where in the constant
const imageOne = "assets/Popplio.png"
const imageTwo = "assets/Brionne.png"
const imageThree = "assets/primarina.png"

//define sources for each character choice

const myButton = document.getElementById("my-button");
const myParagraph = document.getElementById("my-paragraph");
const characterImage = document.getElementById("character-img");


// constants that store sounds
const soundOne = document.getElementById("assets/popplio-sound-_)-made-with-Voicemod.mp3");
const soundTwo = document.getElementById("assets/brionnecry_7c0c1ef75178316.mp3");
const soundThree = document.getElementById("assets/primarinacr_p5r35773.mp3")


let characterCounter = 1;

//document.getElementById("my-button").addEventListener("click", clickFunction);

/**
 * 
 * 
 * update character counter and display next character
 * sets counter back to 1 if 3 has been chosen
 * @returns when character is chosen
 * ... if it worked
 */
function clickFunction() {

    characterCounter = characterCounter + 1;
    console.log('the button has been clicked');
    myParagraph.innerHTML = "I am on character " + characterCounter;

    if (characterCounter > 3) {
        characterCounter = 1;
    }
    
    if (characterCounter === 1) {
        characterImage.src = imageOne;
        soundOne.playAudio();
        return;
    }
    if (characterCounter === 2) {
        characterImage.src = imageTwo;
        soundTwo.playAudio();
        return;
    }
    if (characterCounter === 3) {
        characterImage.src = imageThree;
        soundThree.playAudio();
        return;
    }

}

myButton.onclick = clickFunction;