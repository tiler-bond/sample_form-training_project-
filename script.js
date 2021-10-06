'use strict';
let num = '';
function alertt(number) {
  if (number === 'AC') {
    num = '';
    showNumber(num);
    showResult('');
    return;
  }
  if (number === '=') {
    showNumber(num);
    showResult(eval(num));
    return;
  }

  num = num + `${number}`;

  showNumber(num);
}

function showNumber(number) {
  document.querySelector('.initialValue').innerHTML = number;
}
function showResult(num) {
  document.querySelector('.finalResult').innerHTML = num;
}
