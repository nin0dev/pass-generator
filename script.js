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


// function generatePassword() {
//     let staticPassword = "",
//     randomPassword = "";
//     if (option) {
//         option.forEach(option => { // looping through each option's checkbox
//             if(option.checked) { // if checkbox is checked
//                 if(option.id === "upper-letters") { // if checkbox id is upper-letters
//                     staticPassword += characters[uppercases];
//                     console.log('uppercases are in')
//                 }
//                 if (option.id === "lower-letters") {
//                     staticPassword += characters[lowercases];
//                     console.log('lowercases are in')
//                 }
//                 if (option.id === "numbers") {
//                     staticPassword += characters[numbers];
//                     console.log('numbers are in')
//                 }
//                 if (option.id === "symbols") {
//                     staticPassword += characters[symbols];
//                     console.log('symbols are in')
//                 }
//             }
//         });
//     }
//     for (let i = 0; i < lengthResult; i++) {
//         // getting random character from the static password
//         let randomChar = staticPassword[Math.floor(Math.random() * staticPassword.length)];
//         randomPassword += randomChar;
//         passwordResult.value = randomPassword;
//     }
// }

// const updatePassIndicator = () => {
//     // if lengthSlider value is less than 8 then pass "weak" as passIndicator id else if lengthSlider 
//     // value is less than 16 then pass "medium" as id else pass "strong" as id
//     passIndicator.id = lengthSlider.value <= 8 ? "weak" : lengthSlider.value <= 16 ? "medium" : "strong";

// }