// Variable declaration: Color. this is a simple array with fixed set of predefined colors in Hex and name value
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// Import document objects
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// Add Event Listener
btn.addEventListener("click", function(){
    const randomNumber = getRandomNumber()
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

// Function getRandomNumber. This function generates random number between 0-3 using two JS Math functions Math.floor and Math.random
function getRandomNumber(){
    return Math.floor(Math.random() * colors.length)
}
