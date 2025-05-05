// Nimrod Schatzman - 209279389
// Raz Goldshtein - 207326240

let fromBase;
let toBase;

let inputField = document.querySelector(".input_field");
let outputField = document.querySelector(".output_field");
let convertButton = document.querySelector(".convert_button");


const createSubscript = (base) => {
    let subscriptDigits = {
        2: "₂",
        8: "₈",
        10: "₁₀",
        16: "₁₆"
    }
    return subscriptDigits[base];
}

// checks if input is valid for the selected base
const isValidInput = (inputValue, base) => {
    inputValue = inputValue.toUpperCase();
    if (base === 2) {
        return /^[0-1]+$/.test(inputValue);
    } else if (base === 8) {
        return /^[0-7]+$/.test(inputValue);
    } else if (base === 10) {
        return /^[0-9]+$/.test(inputValue);
    } else if (base === 16) {
        return /^[0-9A-F]+$/.test(inputValue);
    } else {
        return false;
    }
}

// sets the base we're converting FROM
const setFromBase = (base) => {
    fromBase = base;

    let fromButtons = {
        2: document.querySelector(".bin_button"),
        8: document.querySelector(".oct_button"),
        10: document.querySelector(".dec_button"),
        16: document.querySelector(".hex_button")
    }

    fromButtons[2].classList.remove("selected");
    fromButtons[8].classList.remove("selected");
    fromButtons[10].classList.remove("selected");
    fromButtons[16].classList.remove("selected");

    if (base === 2) document.querySelector(".bin_button").classList.add("selected");
    if (base === 8) document.querySelector(".oct_button").classList.add("selected");
    if (base === 10) document.querySelector(".dec_button").classList.add("selected");
    if (base === 16) document.querySelector(".hex_button").classList.add("selected");
}

// sets the base we're converting TO
const setToBase = (base) => {
    toBase = base;

    let toButtons = {
        2: document.querySelector(".bin_to_button"),
        8: document.querySelector(".oct_to_button"),
        10: document.querySelector(".dec_to_button"),
        16: document.querySelector(".hex_to_button")
    }

    toButtons[2].classList.remove("selected");
    toButtons[8].classList.remove("selected");
    toButtons[10].classList.remove("selected");
    toButtons[16].classList.remove("selected");

    if (base === 2) document.querySelector(".bin_to_button").classList.add("selected");
    if (base === 8) document.querySelector(".oct_to_button").classList.add("selected");
    if (base === 10) document.querySelector(".dec_to_button").classList.add("selected");
    if (base === 16) document.querySelector(".hex_to_button").classList.add("selected");
}

// FROM base buttons
document.querySelector(".bin_button").addEventListener("click", () => {
    setFromBase(2);
});
document.querySelector(".oct_button").addEventListener("click", () => {
    setFromBase(8);
});
document.querySelector(".dec_button").addEventListener("click", () => {
    setFromBase(10);
});
document.querySelector(".hex_button").addEventListener("click", () => {
    setFromBase(16);
});

// TO base buttons
document.querySelector(".bin_to_button").addEventListener("click", () => {
    setToBase(2);
});
document.querySelector(".oct_to_button").addEventListener("click", () => {
    setToBase(8);
});
document.querySelector(".dec_to_button").addEventListener("click", () => {
    setToBase(10);
});
document.querySelector(".hex_to_button").addEventListener("click", () => {
    setToBase(16);
});

// conversion logic on button click
convertButton.addEventListener("click", () => {
    let inputValue = inputField.value.trim();

    if (!fromBase || !toBase) {
        alert("Need to select both FROM and TO bases.");
        return;
    }

    if (inputValue === "") {
        alert("Please enter a number.");
        return;
    }

    if (!isValidInput(inputValue, fromBase)) {
        alert("Invalid input for base " + fromBase);
        return;
    }

    let parsedNumber = parseInt(inputValue, fromBase);
    let convertedNumber = parsedNumber.toString(toBase).toUpperCase();

    let subscriptFrom = createSubscript(fromBase);
    let subscriptTo = createSubscript(toBase);

    outputField.innerHTML = inputValue.toUpperCase() + subscriptFrom + " = " + convertedNumber + subscriptTo;

    inputField.value = "";
});