document.addEventListener("DOMContentLoaded", function () {

    const num1Input = document.getElementById("num-1");
    const num2Input = document.getElementById("num-2");
    const addButton = document.getElementById("but-add");
    const minusButton = document.getElementById("but-minus");
    const clearButton = document.getElementById("but-clear");
    const multiplyButton = document.getElementById("but-multiply");
    const divisionButton = document.getElementById("but-division");
    const resultButton = document.getElementById("but-result");
    const resultInput = document.getElementById("result");


    addButton.addEventListener("click", function () {
        calculate("+");
    });

    minusButton.addEventListener("click", function () {
        calculate("-");
    });

    clearButton.addEventListener("click", function () {
        clearFields();
    });

    multiplyButton.addEventListener("click", function () {
        calculate("*");
    });

    divisionButton.addEventListener("click", function () {
        calculate("/");
    });

    resultButton.addEventListener("click", function () {
        calculateResult();
    });


    function calculate(operator) {
        resultInput.value = "";
        resultInput.placeholder = "Result";

        if (num1Input.value === "" || num2Input.value === "") {
            resultInput.placeholder = "Enter numbers first!";
            return;
        }

        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);
        let result;

        switch (operator) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                result = num1 / num2;
                break;
            default:
                result = "Invalid operator";
                break;
        }

        resultInput.value = result;
    }


    function clearFields() {
        num1Input.value = "";
        num2Input.value = "";
        resultInput.value = "";
        resultInput.placeholder = "Result";
    }
});
