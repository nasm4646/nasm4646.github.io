function random() {
    outputInt = randomNumber(0, 100);
    output.textContent = outputInt;
    outputInt2 = randomNumber2(0, 100);
    output2.textContent = outputInt2;
}

function randomNumber(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
  }

function randomNumber2(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
  }

function selectOptionOne() {
  outputInt3 = outputInt;
  output3.textContent = outputInt;
}

function selectOptionTwo() {
  outputInt3 = outputInt2;
  output3.textContent = outputInt2;
}

const output = document.querySelector('.output');
const output2 = document.querySelector('.output2');
let output3 = document.querySelector('.output3');

let outputInt = parseInt(output.textContent);
let outputInt2 = parseInt(output2.textContent);
let outputInt3 = parseInt(output3.textContent);


console.log(outputInt);
console.log(outputInt2);
console.log(outputInt3);

const randomButton = document.querySelector('.random-button').addEventListener('click', random);
const outputOneButton = document.querySelector('.option-one-button').addEventListener('click', selectOptionOne);
const outputTwoButton = document.querySelector('.option-two-button').addEventListener('click', selectOptionTwo);