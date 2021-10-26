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

//TASK 5

const inputForm = document.querySelector('.inputForm');
const inputTask = document.querySelector('.task-list');
const inputValue = document.querySelector('#todo-input');

inputForm.addEventListener('submit', function (e) {
  e.preventDefault();
  if (inputValue.value === '') {
    alert('no task added');
    return;
  }

  const html = `
    <div class="list-container" >
            <div class="task-div">
              <p class="task-info">${inputValue.value}</p>
              <div class="edit-delete-button">
                  <button  class="edit-task" ><i class="far fa-2x edit fa-edit"></i></button>
                  <button class="delete-task" ><i class="fas fa-2x delete fa-trash"></i></button>
              </div>
            </div>
            <div class="edit-div hidden">
                  <form action="" class="task-form">
                      <input
                        type="text"
                        class="editValue"
                        autocomplete="off"
                        value="${inputValue.value}"
                      />
                  <button class="save-button"><i class="far fa-2x fa-save"></i></button>
              </form>
    </div>`;
  inputTask.insertAdjacentHTML('beforeend', html);

  inputValue.value = '';
});

inputTask.addEventListener('click', function (e) {
  if (
    e.target.getAttribute('class').includes('edit') ||
    e.target.getAttribute('class').includes('edit-task')
  ) {
    const editTask = e.target;
    const x = editTask.closest('.list-container');
    const y = x.querySelector('.edit-div');
    y.classList.remove('hidden');
    const editValue = y.querySelector('.editValue');
    const z = editValue.value;
    editValue.focus();
    editValue.value = '';
    editValue.value = z;
  } else if (e.target.getAttribute('class').includes('delete-task')) {
    e.target.parentNode.parentNode.parentNode.remove();
  } else if (e.target.getAttribute('class').includes('delete')) {
    e.target.parentNode.parentNode.parentNode.parentNode.remove();
  }
});

inputTask.addEventListener('submit', function (e) {
  e.preventDefault();
  const editValue = e.target.querySelector('.editValue').value;

  const z = e.target.closest('.list-container');
  z.querySelector('.task-info').innerText = editValue;
  const y = e.target.closest('.edit-div');
  y.classList.add('hidden');
  console.log(editValue);
});

// document.addEventListener('click', function (e) {
//   console.log(e.target);

//     if (document.querySelector('.task-list').contains('div')) {
//       document.querySelectorAll('.edit-div').classList.add('hidden');
//     } else return;
// });

/////
/////
///////////////
//   TASK-6
//////////////
//////////////
//////////////

const task6UserName = document.querySelector('#userName');
const task6Password = document.querySelector('#password');
const task6Email = document.querySelector('#Email');
const task6Number = document.querySelector('#number');
const task6Address = document.querySelector('#address');

function validate() {
  let counter = 0;
  let enteredName = task6UserName.value;
  let enteredPassword = task6Password.value;
  let enteredEmail = task6Email.value;
  let enteredNumber = task6Number.value;
  let enteredAddress = task6Address.value;

  if (enteredName === '') {
    document.querySelector('.task6-alert-user-name').innerHTML =
      'This field cannot be left empty';
    document.querySelector('.task6-alert-user-name').classList.remove('hidden');
  } else if (enteredName !== '') {
    document.querySelector('.task6-alert-user-name').classList.add('hidden');
    counter++;
  }
  if (enteredPassword === '') {
    document.querySelector('.task6-alert-user-password').innerHTML =
      'This field cannot be left empty';
    document
      .querySelector('.task6-alert-user-password')
      .classList.remove('hidden');
  } else if (enteredPassword !== '') {
    document
      .querySelector('.task6-alert-user-password')
      .classList.add('hidden');
    let upperCase = 0;
    let lowerCase = 0;
    let number = 0;
    for (let i = 0; i < enteredPassword.length; i++) {
      if (
        (enteredPassword.charCodeAt(i) >= 65) &
        (enteredPassword.charCodeAt(i) <= 90)
      ) {
        upperCase++;
      }
      if (
        (enteredPassword.charCodeAt(i) >= 97) &
        (enteredPassword.charCodeAt(i) <= 122)
      ) {
        lowerCase++;
      }
      if (
        (enteredPassword.charCodeAt(i) >= 48) &
        (enteredPassword.charCodeAt(i) <= 57)
      ) {
        number++;
      }
    }
    if (upperCase === 0 || lowerCase === 0 || number === 0) {
      document.querySelector('.task6-alert-user-password').innerHTML =
        'Password should contain atleast one capital letter,one small letter and one number';
      document
        .querySelector('.task6-alert-user-password')
        .classList.remove('hidden');
    } else if ((upperCase > 0) & (lowerCase > 0) & (number > 0)) {
      document
        .querySelector('.task6-alert-user-password')
        .classList.add('hidden');
      counter++;
    }
  }
  if (enteredEmail === '') {
    document.querySelector('.task6-alert-user-email').innerHTML =
      'This field cannot be left empty';
    document
      .querySelector('.task6-alert-user-email')
      .classList.remove('hidden');
  } else if (enteredEmail !== '') {
    let arr = [];
    for (let i = 0; i < enteredEmail.length; i++) {
      arr.push(enteredEmail.charCodeAt(i));
    }
    if (!arr.includes(64)) {
      document.querySelector('.task6-alert-user-email').innerHTML =
        'E-mail should be in the form example@abc.com';
      document
        .querySelector('.task6-alert-user-email')
        .classList.remove('hidden');
    } else {
      document.querySelector('.task6-alert-user-email').classList.add('hidden');
      counter++;
    }
  }
  if (enteredNumber === '') {
    document.querySelector('.task6-alert-user-number').innerHTML =
      'This field cannot be left empty';
    document
      .querySelector('.task6-alert-user-number')
      .classList.remove('hidden');
  } else if (enteredNumber.length !== 10) {
    document.querySelector('.task6-alert-user-number').innerHTML =
      'Phone number must contain only 10 digits';
    document
      .querySelector('.task6-alert-user-number')
      .classList.remove('hidden');
  } else if (enteredNumber.length === 10) {
    for (let i = 0; i < enteredNumber.length; i++) {
      if (
        (enteredNumber.charCodeAt(i) >= 48) &
        (enteredNumber.charCodeAt(i) <= 57)
      ) {
        document
          .querySelector('.task6-alert-user-number')
          .classList.add('hidden');
        counter++;
        continue;
      } else
        document.querySelector('.task6-alert-user-number').innerHTML =
          'Phone number must contain only 10 digits';
      document
        .querySelector('.task6-alert-user-number')
        .classList.remove('hidden');
      break;
    }
  }
  if (enteredAddress.length === 0) {
    document.querySelector('.task6-alert-user-address').innerHTML =
      'This field cannot be left empty';
    document
      .querySelector('.task6-alert-user-address')
      .classList.remove('hidden');
  } else if (enteredAddress.length >= 20) {
    document.querySelector('.task6-alert-user-address').innerHTML =
      'Address should not exceed 20 characters';
    document
      .querySelector('.task6-alert-user-address')
      .classList.remove('hidden');
  } else if (enteredAddress.length <= 20) {
    document.querySelector('.task6-alert-user-address').classList.add('hidden');
    counter++;
  }
  // console.log(counter);
  // console.log(document.querySelectorAll('.task6-form-input-fields').length);
  if (
    counter ===
    document.querySelectorAll('.task6-form-input-fields').length + 9
  ) {
    document.querySelector('.task6-submit-button').disabled = false;
  }
}

let usrCtr = 0;
const users = {};
function makeJSON() {
  usrCtr++;

  users[`user${usrCtr}`] = {};
  let Name = (users[`user${usrCtr}`].name = task6UserName.value);
  let Password = (users[`user${usrCtr}`].password = task6Password.value);
  let Email = (users[`user${usrCtr}`].email = task6Email.value);
  let PNumber = (users[`user${usrCtr}`].number = task6Number.value);
  let Address = (users[`user${usrCtr}`].address = task6Address.value);

  console.log(users);
  console.log(Object.keys(users));
  console.log(Object.keys(users).length);
  let html = '';
  html = `<h3>USER ${usrCtr}</h3>
              <ul>
              <li>Name: ${Name}</li>
              <li>Password: ${Password}</li>
              <li>Email: ${Email}</li>
              <li>Ph. Number: ${PNumber}</li>
              <li>Address: ${Address}</li>
              </ul>`;

  document.body.insertAdjacentHTML('beforeend', html);
  for (let i = 0; i < 5; i++) {
    document.forms['myForm'][`inputField${i}`].value = '';
  }
  document.querySelector('.task6-submit-button').disabled = true;
}
