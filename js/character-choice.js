const image = document.getElementById("character");
const paragraph = document.getElementById("my-paragraph");
const button = document.getElementById("my-button");

const imageOne = "assets/characters/bulbasaur.avif";
const imageTwo = "assets/characters/charmander.avif";
const imageThree = "assets/characters/squirtle.avif";

function changeText() {
  paragraph.innerHTML = "New Text";
}

let index = 0;

function onclick() {
  // add one more tho the number of button clicks
  index = index + 1;

  if (index == 1) {
    image.src = imageOne;
  }
  if (index == 2) {
    image.src = imageTwo;
  }
  if (index == 3) {
    index = 0;
    image.src = imageThree;
  }
}

button.onclick = onclick;
