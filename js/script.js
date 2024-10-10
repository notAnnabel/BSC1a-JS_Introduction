//define sources for each character choice

const myButton = document.getElementById("my-button");
const myParagraph = document.getElementById("my-paragraph");
const characterImage = document.getElementedById("character-img");

// store which character is where in the constant
const imageOne = "assets/ame-kangel.webp"
const imageTwo = "assets/kangel.jpeg"
const imageThree = "assets/glitched-monster.webp"

let characterCounter = 0;

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

    if (characterCounter > 3) {
        characterCounter = 1;
    }
    if (characterCounter === 1) {
        characterImage.src = imageOne;
        return;
    }
    if (characterCounter === 2) {
        characterImage.src = imageTwo;
        return;
    }
    if (characterCounter === 3) {
        characterImage.src = imageThree;
        return;
    }



    // characterImage.src = "assets/kangel.jpeg" 
    myParagraph.innerHTML = "I have been clicked " + characterCounter + " times";
}

myButton.onclick = clickFunction;