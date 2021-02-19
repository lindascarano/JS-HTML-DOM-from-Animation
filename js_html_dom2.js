
//Create the Animation Using JavaScript:
//1. JavaScript animations are done by programming gradual changes in an element's style.
function myMove() {
    var palla = document.getElementById("animate");
    var posizione = 0;
    var id = setInterval(frame, 4);
    function frame() {
        if (posizione == 166) {/* test for finished */
            clearInterval(id);
        } else {/* code to change the element style */
            posizione++;
            palla.style.top = posizione + "px";
            palla.style.left = posizione + "px";
        }
    }
}

//JavaScript HTML DOM Events: HTML DOM allows JavaScript to react to HTML events
//1. The onmouseover and onmouseout Events
function mouseOver(obj) {
    obj.innerHTML = "Ora spostalo di nuovo altrove!"
}
function mouseOut(obj) {
    obj.innerHTML = "Sposta il mouse sopra di me di nuovo!"
}

//2.The onmousedown, onmouseup and onclick Events
function mDown(obj) {
    obj.style.backgroundColor = "rgba(224, 160, 171, 0.7)";
    obj.innerHTML = "Rilasciami!";
}
function mUp(obj) {
    obj.style.backgroundColor = "rgb(228, 178, 71)";
    obj.innerHTML = "Cliccami!";
}

//2. Execute a JavaScript when a draggable element enters a drop target:
function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
}

function dragging(event) {
    document.getElementById("demo").innerHTML = "Stai spostando l'elemento selezionato";
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
    document.getElementById("demo").innerHTML = "L'elemento selezionato \u00E8 stato spostato";
}

//3. Creating New HTML Elements (Nodes)
var para = document.createElement("p");
var node = document.createTextNode("This is paragraph is created by JavaScript appendChild");
para.appendChild(node);
var element = document.getElementById("div1");
element.appendChild(para);

//3.1 Removing a Child Node
function myRemove() {
    var parent = document.getElementById("div1");
    var child = document.getElementById("p1");
    parent.removeChild(child);
}

//3.2 Replacing HTML Elements 
function myReplace() {
    var parent = document.getElementById("div1");
    var child = document.getElementById("p2");
    var para = document.createElement("p");
    var node = document.createTextNode("Hai cambiato la scritta! :)");
    para.appendChild(node);
    parent.replaceChild(para, child);
}

//3.3 document.documentElement
function myListHTML(){
alert(document.documentElement.innerHTML);
}





























