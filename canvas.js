// Canvas FrontEnd

// Variables
var pixelCount = 28;
var pixelCountSquared = pixelCount*pixelCount;

// Creating Initial Pixels 
for (let i = 1; i <= pixelCountSquared; i++) {
    var pixel = document.createElement("div");
    pixel.classList.add(i);
    pixel.classList.add("pixel");
    pixel.setAttribute("id",i);
    var canvas = document.getElementById("canvas");
    canvas.appendChild(pixel);
    pixel.setAttribute("onmousedown","fill(" + i + ")");
    pixel.setAttribute("state", 0);
}

// Updating Pixel Count 
function updatePixelCount(){

    // Variables / Constants
    window.pixelCount = document.getElementById("pixelCount").value;
    window.pixelCountSquared = pixelCount*pixelCount;
    const styleElement = document.createElement("style");
    document.head.appendChild(styleElement);
    const stylesheet = styleElement.sheet;

    // Clearing Canvas 
    const canvasElement = document.getElementById("canvas");
    while (canvasElement.firstChild) {
        canvasElement.removeChild(canvasElement.lastChild);
    }
        
    // Updating Pixel Size
    stylesheet.insertRule(":root{ --pixel-count: " + pixelCount + ";}",0);

    // Creating pixels 
    for (let i = 1; i <= pixelCountSquared; i++) {
        var pixel = document.createElement("div");
        pixel.classList.add(i);
        pixel.classList.add("pixel");
        pixel.setAttribute("id",i);
        var canvas = document.getElementById("canvas");
        canvas.appendChild(pixel);
        pixel.setAttribute("onmousedown","fill(" + i + ")");
        pixel.setAttribute("state", 0);
    }
}

// Drawing Pixels 
function fill(pixelNumber) {
    var pixel = document.getElementById(pixelNumber);
    if (document.getElementById(pixelNumber).classList.contains("filled") == false) {
        pixel.classList.add("filled");
        pixel.setAttribute("state", 1);
    }
    else{
        pixel.classList.remove("filled");
        pixel.setAttribute("state", 0);
    }
}

// Canvas Clearing Button
function clearCanvas() {
    for (let i = 1; i <= pixelCountSquared; i++) {
        var pixel = document.getElementById(i);
        pixel.classList.remove("filled");
        pixel.setAttribute("state",0);
    }
}

class Data {
    constructor() {
        this.readings = [];
        };
        
        // Canvas Submit Button 
        submitCanvas() {
            let canvasData = [];
            for (let i = 1; i <= pixelCountSquared; i++) {
                var pixel = document.getElementById(i);
                canvasData[String(i)] = pixel.getAttribute("state");
            }
            if(data.readings.length == 0){
                data.readings = canvasData;
            }
            else{
                this.readings.length = 0;
                data.readings = canvasData;
            }
            console.log(data);
    }
}
const data = new Data();
// class TrainingData {
//     constructor(csv){
//         this.csvfile = csv;
//     };
    

// }
// const file = new FileReader();
// file.onload = function (e) {
//     console.log(file.result);
    
// }
// const trainingData = new TrainingData("./dataset/mnist_train.csv");
const form = document.querySelector("#csvForm");
const csvFileInput = document.querySelector("#csvInput");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const file = csvFileInput.files[0];
  const reader = new FileReader();

  reader.onload = function (e) {
    const csvArray = csvToArr(e.target.result, ",");
    console.log(csvArray);
    
  };

  reader.readAsText(file);
});

function csvToArr(stringVal, splitter) {
  const [keys, ...rest] = stringVal
    .trim()
    .split("\n")
    .map((item) => item.split(splitter));

  const formedArr = rest.map((item) => {
    const object = {};
    keys.forEach((key, index) => (object[key] = item.at(index)));
    return object;
  });
  return formedArr;
}
