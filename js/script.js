const myButton = document.getElementById("my-button");
const myParagraph = document.getElementById("my-paragraph")

let clickCounter = 0;



//document.getElementById("my-button").addEventListener("click", clickFunction);

function clickFunction() {

    clickCounter = clickCounter +1;

    myParagraph.innerHTML = "I have been clicked "+ clickCounter + " times";
}

myButton.onclick = clickFunction;