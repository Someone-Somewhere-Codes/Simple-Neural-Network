// Neural Netowork 
// I would have loved to make this a new file but my server would have required some traffic to load that file to share the Objects around So guess what everything is in this file 

// Objects 
let neuron = {};
let layer = {};


// Functions
// Sigmoid Function 
function sig(sigmoidNumber) {
    var result = Math.pow(1 + Math.pow(Math.E, -sigmoidNumber), -1)
    return result;
}
