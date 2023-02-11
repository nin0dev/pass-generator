// Get the HTML elements
const resultEl = document.getElementById('result'),
lengthEl = document.querySelector('.parameters input[type=range'),
lengthResult = document.querySelector('.top input'),
checkbox = document.querySelectorAll('div.input-container > input'),
generateBtn = document.getElementById('generate'),
dot1 = document.querySelector('.dot-1'),
dot2 = document.querySelector('.dot-2'),
dot3 = document.querySelector('.dot-3'),
dot4 = document.querySelector('.dot-4'),
dots = document.querySelectorAll('.dots');

const characters = { // object of letters, numbers & symbols
    lowercases: "abcdefghijklmnopqrstuvwxyz",
    uppercases: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "^!$%&[](){}:;.,*+-#@<>~"
}

// Show slider's value (password length)
function rangeInput() {
    lengthResult.value = lengthEl.value;
}

// Password strength indicator
function updateIndicator() {
    if (lengthEl.value <= 6) {
        dot1.style.backgroundColor = 'white';
        dot2.style.backgroundColor = 'transparent';
        dot3.style.backgroundColor = 'transparent';
        dot4.style.backgroundColor = 'transparent';
    } else if (!lengthEl.value <= 6 && lengthEl.value <= 8) {
        dot1.style.backgroundColor = 'white';
        dot2.style.backgroundColor = 'white';
        dot3.style.backgroundColor = 'transparent';
        dot4.style.backgroundColor = 'transparent';
    } else if (!lengthEl.value <= 6 && !lengthEl.value <= 8 && lengthEl.value <= 10) {
        dot1.style.backgroundColor = 'white';
        dot2.style.backgroundColor = 'white';
        dot3.style.backgroundColor = 'white';
        dot4.style.backgroundColor = 'transparent';
    } else if (!lengthEl.value <= 6 && !lengthEl.value <= 8 && !lengthEl.value <= 10 && lengthEl.value <= 12) {
        dot1.style.backgroundColor = 'white';
        dot2.style.backgroundColor = 'white';
        dot3.style.backgroundColor = 'white';
        dot4.style.backgroundColor = 'white';
    }
}


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
    updateIndicator();
}