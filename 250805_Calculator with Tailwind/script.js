function appendToDisplay(value) {
    const displayElement = document.getElementById("display");
    let currentValue = displayElement.value;
    const operators = ['+', '-', '*', '/'];
    if (currentValue === "" && operators.includes(value)) {
        return; 
    }
    const lastChar = currentValue.slice(-1);
    if (operators.includes(lastChar) && operators.includes(value)) {
        displayElement.value = currentValue.slice(0, -1) + value;
    } else {
        displayElement.value += value;
    }
}

function clearDisplay() {
document.getElementById("display").value = "";
}

function deleteLastCharacter() {
    let display = document.getElementById("display");
display.value = display.value.slice(0, -1);
}

function calculateResult() {
document.getElementById("display").value = eval(document.getElementById("display").value);
}