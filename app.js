const log = console.log;

const display = document.querySelector(".display")
const items = document.querySelectorAll(".item")

let secondNum = "";
let firstNum = "";
let operator = "";

document.addEventListener("click", function (event) {
    let target = event.target;
    const value = target.getAttribute("data-num")
    const currentOperator = target.getAttribute("data-operator")

    if (currentOperator) {
        operator = currentOperator;
    }
    if (value && !operator) {
        firstNum += value
    }

    if (value && operator) {
        secondNum += value
    }

    let total = 0;

    let operatorSign = "+"

    switch (operator) {
        case "plus":
            total = Number(firstNum) + Number(secondNum)
            operatorSign = "+"
            break;
        case "multiply":
            total = Number(firstNum) * Number(secondNum)
            operatorSign = "*"
            break;
        case "division":
            operatorSign = "/"
            total = Number(firstNum) / Number(secondNum)
            break;
        case "minus":
            operatorSign = "-"
            total = Number(firstNum) - Number(secondNum)
            break;

        default:

            break;
    }

    if (firstNum || secondNum) {
        display.innerHTML = `${firstNum} ${operatorSign} ${secondNum} = ${total}`
    } else {
        display.innerHTML = `0`
    }

    if (value === "ac") {
        display.innerHTML = "";
        firstNum = 0;
        operator = "";
        secondNum = 0;
    }

    log("Total: ", total)
    log("First Num: ", firstNum)
    log("Second Num: ", secondNum)
    log("Operator: ", operator)
})
