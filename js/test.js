function setupTest(number1, number2, operation) {
    const number1HTML = document.querySelector(`#calculator #number1`)
    const number2HTML = document.querySelector(`#calculator #number2`)
    const operationHTML = document.querySelector(`#calculator #operation`)

    number1HTML.value = number1
    number2HTML.value = number2
    operationHTML.value = operation
}

function setupTestCase(number1, number2, operation) {
    setupTest( number1, number2, operation)
    calculate('#calculator')

    var resultHTML = document.querySelector(`#calculator #result`)

    if (isNaN(resultHTML.value)) {
        return resultHTML.value
    }

    return Number(resultHTML.value)
}

function showTheTestResult(testNumber, receiveResult, expectedResult) {
    let resultsAreEquals = receiveResult == expectedResult 
    let resultText

    if (typeof(receiveResult) == 'number' && typeof(expectedResult) == 'number') {
        if (isNaN(expectedResult)) {
            resultsAreEquals = isNaN(receiveResult)
        }
    }

    if (resultsAreEquals) {
        resultText = `Test ${testNumber}: Success \nReceived result: ${receiveResult}\nExpected result: ${expectedResult}`
        console.log('%c' + resultText, 'color: #5FB739')
    } else {
        resultText = `Test ${testNumber}: Failed \nReceived result: ${receiveResult}\nExpected result: ${expectedResult}`
        console.warn(resultText)
    }

    putTestResultsInScreen(resultText, resultsAreEquals)
}

function putTestResultsInScreen(textResult, result) {
    textResult = textResult.replace('\n', '<br>')
    const testHTML = document.querySelector('.tests-results')
    const pHTML = document.createElement('p')
    pHTML.innerHTML = textResult
    if (result) {
        pHTML.classList.add('success')
    } else {
        pHTML.classList.add('failed')
    }
    
    testHTML.append(pHTML)
}

//CLEAR INPUTS
function clearInputs() {
    const number1HTML = document.querySelector(`#calculator #number1`)
    const number2HTML = document.querySelector(`#calculator #number2`)
    const operationHTML = document.querySelector(`#calculator #operation`)
    const resultHTML = document.querySelector(`#calculator #result`)

    number1HTML.value = null
    number2HTML.value = null
    operationHTML.value = null
    resultHTML.value = null
}

//TEST'S

function testCase01() {
    const expectedResult = 'teste768'
    let result = setupTestCase('teste', 768, '+')
    showTheTestResult(1, result, expectedResult)
}

function testCase02() {
    const expectedResult = 'NaN'
    let result = setupTestCase('teste', 768, '-')
    
    showTheTestResult(2, result, expectedResult)
}

function testCase03() {
    const expectedResult = 'NaN'
    let result = setupTestCase('teste', 2, '*')
    
    showTheTestResult(3, result, expectedResult)
}

function testCase04() {
    const expectedResult = 'NaN'
    let result = setupTestCase('teste', 768, '/')
    
    showTheTestResult(4, result, expectedResult)
}

function testCase05() {
    const expectedResult = '768teste'
    let result = setupTestCase(768, 'teste', '+')
    
    showTheTestResult(5, result, expectedResult)
}

function testCase06() {
    const expectedResult = 'NaN'
    let result = setupTestCase(768, 'teste', '-')
    
    showTheTestResult(6, result, expectedResult)
}

function testCase07() {
    const expectedResult = 'NaN'
    let result = setupTestCase(2, 'teste', '*')
    
    showTheTestResult(7, result, expectedResult)
}

function testCase08() {
    const expectedResult = 'NaN'
    let result = setupTestCase(768, 'teste', '/')
    
    showTheTestResult(8, result, expectedResult)
}

function testCase09() {
    const expectedResult = 23
    let result = setupTestCase(null, 23, '+')
    
    showTheTestResult(9, result, expectedResult)
}

function testCase10() {
    const expectedResult = 23
    let result = setupTestCase(23, null, '+')
    
    showTheTestResult(10, result, expectedResult)
}

function runAllTestCases() {
    const tests = [
        testCase01(),
        testCase02(),
        testCase03(),
        testCase04(),
        testCase05(),
        testCase06(),
        testCase07(),
        testCase08(),
        testCase09(),
        testCase10(),
    ]

    tests.forEach(test => {
        if (typeof(test) == 'function') {
            test()
        }
        clearInputs()
    })
}

runAllTestCases()

/** TRYING TO DISPATCH A CLICK EVENT ON BUTTON
    var button = document.querySelector(`#calculator #submit`)

    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    const screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    const buttonWidth = screenWidth * 0.6
    const buttonHeight = screenHeight * 0.5

    const event = new PointerEvent('mouse', {
        button: 0,
        buttons: 0,
        cancelable: true,
        height: 1,
        pointerType: "mouse",
        type: "click",
        which: 1,
        width: 1,
        clientX: buttonWidth,
        clientY: buttonHeight,
        x: buttonWidth,
        y: buttonHeight,
    })
    waitAndDispatchEvent(button, event)
*/

/**async function waitAndDispatchEvent(element, event) {
    setTimeout(() => {
        window.document.body.dispatchEvent(event)
    })
}

setTimeout(() => {
    testCase01()
})*/
