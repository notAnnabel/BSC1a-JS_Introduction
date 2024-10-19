// store which character is where in the constant
const imageSources =["assets/Popplio.png", "assets/brionne.png", "assets/primarina.png"];

//define sources for each character choice

const myButton = document.getElementById("my-button");
const myParagraph = document.getElementById("my-paragraph");
const characterImage = document.getElementById("character-img");


// constants that store sounds
const soundOne = new Audio("assets/popplio-sound-_)-made-with-Voicemod.mp3");
const soundTwo = new Audio("assets/brionnecry_7c0c1ef75178316.mp3");
const soundThree = new Audio("assets/primarinacr_p5r35773.mp3");


// alt text
const altText =['this is popplio','this is brionne','this is primarina'];


// define text paragraph :)
const characterName = ['Popplio', 'Brionne', 'Primarina'];

// submit button
const submitButton = document.getElementById("name-change-button");
 

// input field
const inputField = document.getElementById("name-change-input");


// to accomodate for the pokeball, popplio is at 1
let characterCounter = 0;


// change the text onscreen below the pokemon/pokeball
function submitting() {
    myParagraph.innerHTML = inputField.value;
}

// calls submit function above
submitButton.onclick = submitting;


// switch character and below text and update according to counter
function clickFunction() {
    characterCounter = characterCounter + 1;
    myParagraph.innerHTML = "I am on character " + characterCounter;
    
    if (characterCounter > 3) {
        characterCounter = 1;
    }
    console.log('the button has been clicked', characterCounter);
    /* characterImage.src = imageSources[characterCounter -1];
    characterImage.alt = altText[characterCounter -1];
    myParagraph.innerHTML = characterName[characterCounter -1]; */
    
    
    if (characterCounter === 1) {
        characterImage.src = imageSources[0];
        characterImage.alt = altText[0];
        myParagraph.innerHTML = characterName[0];
        soundOne.play();
        return;
    }
    if (characterCounter === 2) {
        characterImage.src = imageSources[1];
        characterImage.alt = altText[1];
        myParagraph.innerHTML = characterName[1];
        soundTwo.play();
        return;
    }
    if (characterCounter === 3) {
        characterImage.src = imageSources[2];
        characterImage.alt = altText[2];
        myParagraph.innerHTML = characterName[2];
        soundThree.play();
        return;
    }

} 

// calls clickFunction
myButton.onclick = clickFunction;