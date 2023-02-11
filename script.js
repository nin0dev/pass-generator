// Get the HTML elements
const resultEl = document.getElementById('result'),
lengthEl = document.querySelector('.parameters input[type=range'),
checkbox = document.querySelectorAll('div.input-container > input'),
generateBtn = document.getElementById('generate');

const characters = { // object of letters, numbers & symbols
    lowercases: "abcdefghijklmnopqrstuvwxyz",
    uppercases: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "^!$%&|[](){}:;.,*+-#@<>~"
}

function generate() {
    let staticPassword = "",
    randomPassword = "";

    if (checkbox) {
        checkbox.forEach(checkbox => {
            if (checkbox.checked) {
                if (checkbox.id === "upper-letters") {
                    staticPassword += characters['uppercases'];
                }
                if (checkbox.id === "lower-letters") {
                    staticPassword += characters['lowercases'];
                }
                if (checkbox.id === "numbers") {
                    staticPassword += characters['numbers'];
                }
                if (checkbox.id === "symbols") {
                    staticPassword += characters['symbols'];
                }
            } else {
                resultEl.value = "";
            }
        });
    }
    for (let i = 0; i < lengthEl.value; i++) {
        // getting random character from the static password
        let randomChar = staticPassword[Math.floor(Math.random() * staticPassword.length)];
        randomPassword += randomChar;
    }
    resultEl.value = randomPassword;
}