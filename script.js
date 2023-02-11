// Get the HTML elements
const resultEl = document.getElementById('result'),
lengthEl = document.querySelector('.parameters input[type=range'),
checkbox = document.querySelectorAll('div.input-container > input'),
upperCheckbox = document.querySelectorAll('div.input-container input#upper-letters'),
lowerCheckbox = document.querySelectorAll('div.input-container input#lower-letters'),
numberCheckbox = document.querySelectorAll('div.input-container input#numbers'),
symbolCheckbox = document.querySelectorAll('div.input-container input#symbols'),
generateBtn = document.getElementById('generate'),
dot1 = document.querySelector('.dot-1'),
dot2 = document.querySelector('.dot-2'),
dot3 = document.querySelector('.dot-3'),
dot4 = document.querySelector('.dot-4');

const characters = { // object of letters, numbers & symbols
    lowercases: "abcdefghijklmnopqrstuvwxyz",
    uppercases: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "^!$%&[](){}:;.,*+-#@<>~"
}

// // Password strength indicator
// const updateIndicator = () => {
//     if ()
// }

// // Show slider's value (password length)


// On 'GENERATE' button click, action...
function generate() {
    let staticPassword = "",
    randomPassword = "";
    if (checkbox) {
        checkbox.forEach(checkbox => {
            if (checkbox.checked) {
                if (checkbox.id === "upper-letters" ) {
                    staticPassword += characters['uppercases'];
                    console.log('Uppercases are in');
                }
                if (checkbox.id === "lower-letters") {
                    staticPassword += characters['lowercases'];
                    console.log('Lowercases are in');
                }
                if (checkbox.id === "numbers") {
                    staticPassword += characters['numbers'];
                    console.log('Numbers are in');
                }
                if (checkbox.id === "symbols") {
                    staticPassword += characters['symbols'];
                    console.log('Symbols are in');
                }
            }
        });
    }

    for (let i = 0; i < lengthEl.value; i++) {
        // getting random character from the static password
        let randomChar = staticPassword[Math.floor(Math.random() * staticPassword.length)];
        randomPassword += randomChar;
    }
    resultEl.value = randomPassword;

    // updateIndicator();
}