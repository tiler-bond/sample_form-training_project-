'use strict';

const task6UserName = document.querySelector('#userName');
const task6Password = document.querySelector('#password');
const task6Email = document.querySelector('#Email');
const task6Number = document.querySelector('#number');
const task6Address = document.querySelector('#address');
const allErrors = document.querySelectorAll('.error-msg');

function resetErrors() {
  for (let i = 0; i < allErrors.length; i++) {
    allErrors[i].innerHTML = '';
  }
}

function validate() {
  resetErrors();
  let enteredName = task6UserName.value;
  let enteredPassword = task6Password.value;
  let enteredEmail = task6Email.value;
  let enteredNumber = task6Number.value;
  let enteredAddress = task6Address.value;

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

  let emailCtr = 0;
  let arr = [];
  for (let i = 0; i < enteredEmail.length; i++) {
    arr.push(enteredEmail.charCodeAt(i));
  }
  if (!arr.includes(64)) {
    emailCtr++;
  }

  let numberCtr = 0;
  for (let i = 0; i < enteredNumber.length; i++) {
    if (
      (enteredNumber.charCodeAt(i) >= 48) &
      (enteredNumber.charCodeAt(i) <= 57)
    ) {
      continue;
    } else {
      numberCtr++;
      break;
    }
  }

  if (enteredName === '') {
    document.querySelector('.task6-alert-user-name').innerHTML =
      'This field cannot be left empty';
  } else if (enteredName.length > 7) {
    document.querySelector('.task6-alert-user-name').innerHTML =
      'Name should be less than 7 characters';
  } else if (!isNaN(enteredName)) {
    document.querySelector('.task6-alert-user-name').innerHTML =
      'Name should not contain all numbers';
  } else if (enteredPassword === '') {
    document.querySelector('.task6-alert-user-password').innerHTML =
      'This field cannot be left empty';
  } else if (upperCase === 0 || lowerCase === 0 || number === 0) {
    document.querySelector('.task6-alert-user-password').innerHTML =
      'Password should contain atleast one capital letter,one small letter and one number';
  } else if (enteredEmail === '') {
    document.querySelector('.task6-alert-user-email').innerHTML =
      'This field cannot be left empty';
  } else if (emailCtr !== 0) {
    document.querySelector('.task6-alert-user-email').innerHTML =
      'E-mail should be in the form example@abc.com';
  } else if (enteredNumber === '') {
    document.querySelector('.task6-alert-user-number').innerHTML =
      'This field cannot be left empty';
  } else if (enteredNumber.length !== 10) {
    document.querySelector('.task6-alert-user-number').innerHTML =
      'Phone number must contain only 10 digits';
  } else if (numberCtr !== 0) {
    document.querySelector('.task6-alert-user-number').innerHTML =
      'Phone number must contain only 10 digits';
  } else if (enteredAddress.length === 0) {
    document.querySelector('.task6-alert-user-address').innerHTML =
      'This field cannot be left empty';
  } else if (enteredAddress.length >= 20) {
    document.querySelector('.task6-alert-user-address').innerHTML =
      'Address should not exceed 20 characters';
  } else {
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
              <li>Name: ${Name}  </li>
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
