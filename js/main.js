function calculate(formId) {
    const number1 = document.querySelector(`${formId} #number1`)
    const number2 = document.querySelector(`${formId} #number2`)
    const operation = document.querySelector(`${formId} #operation`)
    var resultHTML = document.querySelector(`${formId} #result`)
    var result

    if (String(operation.value)=== '*') {
        result = number1.value * number2.value

    } else if (String(operation.value)=== '+') {
        if (isNaN(number1.value) || isNaN(number2.value)) {
            result = number1.value + number2.value
        } else {
            result = Number(number1.value) + Number(number2.value)
        }
        

    } else if (String(operation.value)=== '-') {
        result = number1.value - number2.value

    } else if (String(operation.value)=== '/') {
        result = number1.value / number2.value
    }

    resultHTML.value = result
}