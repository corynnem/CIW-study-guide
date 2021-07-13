// Canvas example
let canvas = document.querySelector('canvas')
let context = canvas.getContext('2d')

// The graphics element for html and utilizes javascript to draw
context.fillStyle = "blue"
context.beginPath();
context.moveTo(15, 15)
context.lineTo(100, 45)
context.lineTo(60, 130)
context.fill()

context.fillStyle = "orange"
context.fillRect(130, 40, 30, 20)



// Geolocation example
const position = (position) => {
    let lon = position.coords.longitude
    let lat = position.coords.latitude
    console.log('Geolocation example',lon, lat)
}

navigator.geolocation.getCurrentPosition(position)


//Drag and drop example

function allowDrop(e) {
    e.preventDefault();
}

function drag(e) {
    e.dataTransfer.setData("text", e.target.id);
}

function drop(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
}


// File takes 2 paramters: file contents as array lines of text and file name
let file = new File(["This is my file and it contains top secret data", "This data can only be read by private eyes "], 'Top Secret')

console.log(file)


// Will tell you how many browser windows are in your history 
let numberOfEntries = window.history.length

//Invoking the back function takes you to the last page in your browser history
// let entries = window.history.back() and window.history.forward() will take you to the next tab in browser history

console.log(numberOfEntries)