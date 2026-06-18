let display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let expression = display.value;

        display.value = eval(expression);
    }
    catch {
        display.value = "Error";
    }
}

// Scientific Functions

function squareRoot() {
    try {
        display.value = Math.sqrt(eval(display.value));
    } catch {
        display.value = "Error";
    }
}

function square() {
    try {
        display.value = Math.pow(eval(display.value), 2);
    } catch {
        display.value = "Error";
    }
}

function sin() {
    try {
        display.value = Math.sin(eval(display.value) * Math.PI / 180).toFixed(4);
    } catch {
        display.value = "Error";
    }
}

function cos() {
    try {
        display.value = Math.cos(eval(display.value) * Math.PI / 180).toFixed(4);
    } catch {
        display.value = "Error";
    }
}

function tan() {
    try {
        display.value = Math.tan(eval(display.value) * Math.PI / 180).toFixed(4);
    } catch {
        display.value = "Error";
    }
}

function log() {
    try {
        display.value = Math.log10(eval(display.value)).toFixed(4);
    } catch {
        display.value = "Error";
    }
}

// Keyboard Support

document.addEventListener("keydown", (e) => {

    if ("0123456789+-*/.".includes(e.key)) {
        appendValue(e.key);
    }

    if (e.key === "Enter") {
        calculate();
    }

    if (e.key === "Backspace") {
        deleteLast();
    }

    if (e.key === "Escape") {
        clearDisplay();
    }
});