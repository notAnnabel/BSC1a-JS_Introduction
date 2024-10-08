const paragraph = document.getElementById("my-paragraph");
const button = document.getElementById("my-button");

let buttonClicks = 0;

function changeText() {
  // add one more tho the number of button clicks
  buttonClicks = buttonClicks + 1;

  // display it on the website
  paragraph.innerHTML = "I have been modified " + buttonClicks + " time(s)";
}

button.onclick = changeText;

button = 3;
