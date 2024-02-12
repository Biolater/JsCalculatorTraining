const calculatorButtons = Array.from(document.getElementsByClassName("calculator__button"));
const calculatorScreen = document.querySelector(".calculator__screen");
let addedValues = "";
let dotCount = 0;


function addToTheScreen(value) {
    if (value === ".") {
        dotCount++;
        if (addedValues.length === 0) {
            addedValues += "0.";
        } else {
            const previousValue = addedValues[addedValues.length - 1];

            if (previousValue === ".") {
                return;
            }else{
                if("+-/*".includes(previousValue)){
                    return;
                }else{
                    addedValues +="."
                }
            }
        }
    }
    else if (value === "0" && addedValues.length === 0) {
        return;
    }
    else if (value === "clear") {
        clear();
        return;
    }

    else if (numberChecker(value) === false) {
        addedValues += value
    }else if(value === "="){
        calculate();
        return;
    } 
    else {
        if (addedValues.length === 0) {
            addedValues += `0${value}`
        } else {
            const previousValue = addedValues[addedValues.length - 1];
            if (previousValue === "/" || previousValue === "*" || previousValue === "-" || previousValue === "+" || previousValue === ".") {
                return;
            }else{
                addedValues += `${value}`
            }
        }

    }
    calculatorScreen.innerText = addedValues
}

function numberChecker(value) {
    return isNaN(Number(value))
}
function clear() {
    calculatorScreen.innerText = "0";
    addedValues = ""
    dotCount = 0;
}

function calculate() {
    calculatorScreen.innerText = eval(addedValues);
    addedValues = "";
}

calculatorButtons.forEach(button => button.addEventListener('click', () => addToTheScreen(button.dataset.type)))