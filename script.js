'use strict';

//   TASK 2

let num = '';
function alertt(number) {
  if (number === 'AC') {
    num = '';
    showNumber(num);
    showResult('');
    return;
  }
  if (number === '=') {
    // showNumber(num);
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

//  TASK 3

const inputNumber = document.querySelector('#evenNum');
const outerForm = document.querySelector('.evenNumbers');
const container = document.querySelector('.container');
const descriptionDiv = document.querySelector('.descriptionDiv');
let html = '';
outerForm.addEventListener('submit', notSubmittingForm);
function notSubmittingForm(e) {
  e.preventDefault();
  container.innerHTML = '';
  descriptionDiv.innerHTML = '';
  const arr = [];
  const number = +inputNumber.value;
  if (number > 500) {
    inputNumber.value = '';
    alert('enter a valid number that should be less than 500');
    return;
  }
  descriptionDiv.insertAdjacentHTML(
    'afterbegin',
    `<p>ALL Even Numbers upto ${number}</p>`
  );
  for (let i = 1; i <= number; i++) {
    if (i % 2 === 0) arr.push(i);
    else continue;
  }
  let id = 0;
  arr.forEach((r, i) => {
    html = `<ul class="listNumbers" ><li>${r}</li></ul>`;
    if (i % 15 === 0) {
      id++;
      const row = document.createElement('div');
      row.setAttribute('class', 'row');
      row.setAttribute('id', `row${id}`);
      container.appendChild(row);
    }
    document.querySelector(`#row${id}`).insertAdjacentHTML('beforeend', html);
    html = '';
  });
}
