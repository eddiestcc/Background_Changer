// DOM Elements
const button = document.getElementById("button");
let bg = document.body
let display = document.getElementById("characters");

// Variables
const hexCharacters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

// Functions
// Generating Hex Code
let getHexIndex = (index) => {
    return hexCharacters[index];
};

let generateNewColor = () => {
    let hexColorCode = "#";

    for (let index = 0; index < 6; index++) {
        const randomHexCharacter = Math.floor ( Math.random() * hexCharacters.length);
        hexColorCode += getHexIndex(randomHexCharacter);  
    }

    console.log(hexColorCode, "Hex Code");

    return hexColorCode;
};

// Setting background color and dispay rgb 

let changeBackground = () => {
    bg.style.backgroundColor = generateNewColor();
    display.innerHTML = bg.style.backgroundColor;
    
};

// button event 
button.addEventListener("click", changeBackground);
button.addEventListener("keypress", changeBackground);
