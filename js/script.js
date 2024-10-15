// store which character is where in the constant
const imageOne = "assets/Popplio.png"
const imageTwo = "assets/Brionne.png"
const imageThree = "assets/primarina.png"

//define sources for each character choice

const myButton = document.getElementById("my-button");
const myParagraph = document.getElementById("my-paragraph");
const characterImage = document.getElementById("character-img");


// constants that store sounds
const soundOne = new Audio("assets/popplio-sound-_)-made-with-Voicemod.mp3");
const soundTwo = new Audio("assets/brionnecry_7c0c1ef75178316.mp3");
const soundThree = new Audio("assets/primarinacr_p5r35773.mp3");


// alt text
const altText1 = 'this is popplio';
const altText2 = 'this isbrionne';
const altText3 = 'this is primarina';

// define text paragraph :)
const characterName1 = 'popplio';
const characterName2 = 'brionne';
const characterName3 = 'Primarina';

document.getElementById("my-button").addEventListener("click", clickFunction);

/**
 * 
 * 
 * update character counter and display next character
 * sets counter back to 1 if 3 has been chosen
 * @returns when character is chosen
 * ... if it worked
 */


let characterCounter = 1;

function clickFunction() {
    characterCounter = characterCounter + 1;
    console.log('the button has been clicked');
    myParagraph.innerHTML = "I am on character " + characterCounter;

    if (characterCounter > 3) {
        characterCounter = 1;
    }
    
    if (characterCounter === 1) {
        characterImage.src = imageOne;
        characterImage.alt = altText1;
        myParagraph.innerHTML = characterName1;
        // soundOne.play();
        return;
    }
    if (characterCounter === 2) {
        characterImage.src = imageTwo;
        characterImage.alt = altText2;
        myParagraph.innerHTML = characterName2;
        // soundTwo.play();
        return;
    }
    if (characterCounter === 3) {
        characterImage.src = imageThree;
        characterImage.alt = altText1;
        myParagraph.innerHTML = characterName3;
        // soundThree.play();
        return;
    }

}

myButton.onclick = clickFunction();