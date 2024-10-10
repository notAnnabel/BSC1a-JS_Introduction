//drop zone - where complements can be dropped into
const dropzone = document.getElementById("dropzone");
//draggable objects - any object which can be dragged into dropxone
const draggableObjects = document.getElementsByClassName("draggable");

// currently dragging stores undefined when no object is being dragged or an HTMLElement when an object is currently beingd ragged
let currentlyDragging = undefined;

/**
 * functiont fired when drag start event is fired on a draggable element.
 * - saves currentlyDragginv event as the target of current event
 * - stores offset in the dataTransfer event property
 * WARNING: Elements must have position relative or absolute for this functiont o work.
 * @param {Event} event
 */
function onDragStart(event) {
  //store currentlyDragging as target of current event
  currentlyDragging = event.target;

  // obtain style from dragged element.
  const style = window.getComputedStyle(event.target, null);

  // set Event dataTransfer to offset: (elementLeftX - clientX, elementTopY - clientY)
  event.dataTransfer.setData(
    "text/plain",
    parseInt(style.left, 10) -
      event.clientX +
      "," +
      (parseInt(style.top, 10) - event.clientY)
  );
}

/**
 * onDragOver simply prevents default to allow dropping
 * @param {Event} event
 */
function onDragOver(event) {
  event.preventDefault();
}

/**
 * Event handler to handle when object is dropped into dragzone.
 * The currentlyDragging object style will be modified when this happens so that it can stay in the dropzone.
 * @param {Event} event
 */
function onDrop(event) {
  //obtain offset from initial position to current position
  const offset = event.dataTransfer.getData("text/plain").split(",");

  // calculate new position, taking offset into account
  currentlyDragging.style.left = event.clientX + parseInt(offset[0], 10) + "px";
  currentlyDragging.style.top = event.clientY + parseInt(offset[1], 10) + "px";

  // reset currently dragging
  currentlyDragging = undefined;
}

for (object of draggableObjects) {
  object.ondragstart = onDragStart;
}
dropzone.addEventListener("dragover", onDragOver, false);
dropzone.addEventListener("drop", onDrop, false);
