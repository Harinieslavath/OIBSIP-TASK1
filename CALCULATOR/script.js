function appendValue(value) {
    document.getElementById('result').value += value;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function deleteLastChar() {
    var result = document.getElementById('result').value;
    document.getElementById('result').value = result.slice(0, -1);
}

function calculateResult() {
    var result = document.getElementById('result').value;
    var calculation = eval(result);

    if (calculation || calculation === 0) {
        document.getElementById('result').value = calculation;
    } else {
        document.getElementById('result').value = 'Error';
    }
}
