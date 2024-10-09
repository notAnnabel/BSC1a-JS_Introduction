const draggableObjects = document.getElementsByClassName("draggable");

let currentlyDragging = undefined;

for (object of draggableObjects) {
  object.ondragstart = (event) => {
    currentlyDragging = event.target;
    setTimeout(() => {
      currentlyDragging.style.display = "none";
    });
  };

  object.ondragend = () => {
    currentlyDragging.style.display = "inline";
  };
}