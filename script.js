//Numbers-------------------------------------------
const buttonZero = document.getElementById('zero');
const buttonOne = document.getElementById('one');
const buttonTwo = document.getElementById('two');
const buttonThree = document.getElementById('three');
const buttonFour = document.getElementById('four');
const buttonFive = document.getElementById('five');
const buttonSix = document.getElementById('six');
const buttonSeven = document.getElementById('seven');
const buttonEight = document.getElementById('eight');
const buttonNine = document.getElementById('nine');

const buttonComma = document.getElementById('comma');

//Operations----------------------------------------------
const buttonEquals = document.getElementById('equals');
const buttonPlus = document.getElementById('plus');
const buttonMinus = document.getElementById('minus');
const buttonMulti = document.getElementById('multipli');
const buttonDevided = document.getElementById('devided');

//Delete/AC---------------------------------------------
const buttonAc = document.getElementById('ac');
const buttonDelete = document.getElementById('delete');


//Write numbers and result
let write = document.getElementById('write');
let writeResult = document.getElementById('result');

//Result
let result = '';
const pattern = /^[0-9,]*$/g;


//Numbers-----------------------------------------------------------

buttonZero.onclick = function() {
    console.log(buttonZero.value);
    result += buttonZero.value;
    write.innerHTML = result;
}

buttonOne.onclick = function() {
    console.log(buttonOne.value);
    result += buttonOne.value;
    write.innerHTML = result;
}

buttonTwo.onclick = function() {
    console.log(buttonTwo.value);
    result += buttonTwo.value;
    write.innerHTML = result;
}

buttonThree.onclick = function() {
    console.log(buttonThree.value);
    result += buttonThree.value;
    write.innerHTML = result;
}

buttonFour.onclick = function() {
    console.log(buttonFour.value);
    result += buttonFour.value;
    write.innerHTML = result;
}

buttonFive.onclick = function() {
    console.log(buttonFive.value);
    result += buttonFive.value;
    write.innerHTML = result;
}

buttonSix.onclick = function() {
    console.log(buttonSix.value);
    result += buttonSix.value;
    write.innerHTML = result;
}

buttonSeven.onclick = function() {
    console.log(buttonSeven.value);
    result += buttonSeven.value;
    write.innerHTML = result;
}

buttonEight.onclick = function() {
    console.log(buttonEight.value);
    result += buttonEight.value;
    write.innerHTML = result;
}

buttonNine.onclick = function() {
    console.log(buttonNine.value);
    result += buttonNine.value;
    write.innerHTML = result;
}

buttonComma.onclick = function() {
    console.log(buttonComma.value);
    result += buttonComma.value;
    write.innerHTML = result;
}

//Operations-----------------------------------------------------------

buttonPlus.onclick = function() {
    console.log(buttonPlus.value);
    result += buttonPlus.value;
    write.innerHTML = result;
}

buttonMinus.onclick = function() {
    console.log(buttonMinus.value);
    result += buttonMinus.value;
    write.innerHTML = result;
}

buttonMulti.onclick = function() {
    console.log(buttonMulti.value);
    result += buttonMulti.value;
    write.innerHTML = result;
}

buttonDevided.onclick = function() {
    console.log(buttonDevided.value);
    result += buttonDevided.value;
    write.innerHTML = result;
}

buttonEquals.onclick = function() {
    console.log(eval(result));
    let evalResult = eval(result);
    let test = pattern.test(evalResult);

    if (result) {
        if (!test) {
           evalResult = Number(evalResult).toFixed(8);
        }
        writeResult.innerHTML = "= " + evalResult;
    }
    else {
        writeResult.innerHTML = 0;
    }
    
}

//Delete/AC-----------------------------------------------------------

buttonAc.onclick = function() {
    console.log('Hit the ac button')
    result = "";
    write.innerHTML = result;
    writeResult.innerHTML = 0;
}

buttonDelete.onclick = function() {
    console.log('Hit the delete button')
    result = result.slice(0, -1);
    write.innerHTML = result;
}