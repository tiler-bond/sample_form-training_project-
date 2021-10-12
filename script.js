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

outerForm.addEventListener('submit', notSubmittingForm);
function notSubmittingForm(e) {
  e.preventDefault();
  container.innerHTML = '';
  descriptionDiv.innerHTML = '';

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

  for (let i = 2; i <= number; i++) {
    if (i % 2 === 0) {
      const html = `<ul class="listNumbers" ><li>${i}</li></ul>`;
      container.insertAdjacentHTML('beforeend', html);
    }
  }
}

// TASK 4

const originalArr = ['apple', 'banana', 'cherry', 'mango', 'peach'];

const arrPush = document.querySelector('#push');
arrPush.addEventListener('change', function () {
  const arr = [...originalArr];
  const value1 = arrPush.value;
  console.log(`Original array => `);
  console.log(arr);
  arr.push(value1);
  console.log(`Mutated array => `);
  console.log(arr);
  arrPush.value = '';
});

const arrPop = document.querySelector('#pop');
arrPop.addEventListener('click', function () {
  const arr = [...originalArr];
  console.log(`Original array => `);
  console.log(arr);
  arr.pop();
  console.log(`Mutated array => `);
  console.log(arr);
});

const arrToString = document.querySelector('#toString');
arrToString.addEventListener('click', function () {
  const arr = [...originalArr];
  console.log(`Original array => `);
  console.log(arr);
  console.log(`Mutated array => ${arr.toString()}`);
});

const arrJoin = document.querySelector('#join');
arrJoin.addEventListener('click', function () {
  const arr = [...originalArr];
  console.log(`Original array => `);
  console.log(arr);
  console.log(`Mutated array => ${arr.join('  &  ')}`);
});

const arrShift = document.querySelector('#shift');
arrShift.addEventListener('click', function () {
  const arr = [...originalArr];
  console.log(`Original array => `);
  console.log(arr);
  arr.shift();
  console.log(`Mutated array => `);
  console.log(arr);
});

const arrUnshift = document.querySelector('#unshift');
arrUnshift.addEventListener('change', function () {
  const arr = [...originalArr];
  const value1 = arrUnshift.value;
  console.log(`Original array => `);
  console.log(arr);
  arr.unshift(value1);
  console.log(`Mutated array => `);
  console.log(arr);
  arrUnshift.value = '';
});

const arrConcat = document.querySelector('#concat');
arrConcat.addEventListener('change', function () {
  const arr = [...originalArr];
  const value1 = arrConcat.value.split(',');
  console.log(`Original array => `);
  console.log(arr);
  const value2 = arr.concat(value1);
  console.log(`Mutated array => `);
  console.log(value2);
  arrConcat.value = '';
});

const arrSlice = document.querySelector('#slice');
arrSlice.addEventListener('change', function () {
  const arr = [...originalArr];
  const value1 = arrSlice.value.split(',');
  console.log(`Original array => `);
  console.log(arr);
  const value2 = arr.slice(value1[0], value1[1]);
  console.log(`Mutated array => `);
  console.log(value2);
  arrSlice.value = '';
});

const arrSplice = document.querySelector('#splice');
arrSplice.addEventListener('change', function () {
  const arr = [...originalArr];
  const value1 = arrSplice.value.split(',');
  if (value1.length < 3) {
    console.log(`Original array => `);
    console.log(arr);
    arr.splice(value1[0], value1[1]);
    console.log(`Mutated array => `);
    console.log(arr);
    arrSplice.value = '';
  } else if (value1.length > 2) {
    console.log(`Original array => `);
    console.log(arr);
    arr.splice(value1[0], value1[1]);
    let counter = 2;
    for (let i = value1[0]; counter < value1.length; i++) {
      arr.splice(i, 0, value1[counter]);
      counter++;
    }
    console.log(`Mutated array => `);
    console.log(arr);
    arrSplice.value = '';
  }
});
