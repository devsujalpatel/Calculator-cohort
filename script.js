const input = document.querySelector("#input") 

let currentDisplay = "0";
let resultDispaly = false;

function updateDisplay(){
    input.value = currentDisplay;
}

function appendToDisplay(value){
    if(currentDisplay === "0" || resultDispaly){
        currentDisplay = value;
    } else {
        currentDisplay += value;
    }
    resultDispaly = false;
    updateDisplay();
}

function calculateResult(){
    try {
        const result = eval(currentDisplay);
        currentDisplay = result.toString();
        updateDisplay();
    } catch (error) {
        currentDisplay = "Error";
        updateDisplay();
    }
    resultDispaly = true;
}

function clearDisplay(){
    currentDisplay = "0";
    resultDispaly = false;
    updateDisplay();
}

function deleteOne() {
    if (currentDisplay.length > 1) {
        currentDisplay = currentDisplay.slice(0, -1);
    } else {
        currentDisplay = "0";
    }
    updateDisplay();
}
