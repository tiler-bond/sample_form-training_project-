'use strict';

const task6UserName = document.querySelector('#userName');
const task6Password = document.querySelector('#password');
const task6Email = document.querySelector('#Email');
const task6Number = document.querySelector('#number');
const task6Address = document.querySelector('#address');
const allErrors = document.querySelectorAll('.error-msg');
const page1 = document.querySelector('.task-6');

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
  } else if (!enteredEmail.includes('@')) {
    document.querySelector('.task6-alert-user-email').innerHTML =
      'E-mail should be in the form example@abc.com';
  } else if (enteredNumber === '') {
    document.querySelector('.task6-alert-user-number').innerHTML =
      'This field cannot be left empty';
  } else if (enteredNumber.length !== 10) {
    document.querySelector('.task6-alert-user-number').innerHTML =
      'Phone number must contain only 10 digits';
  } else if (isNaN(enteredNumber)) {
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
const users = [];
function makeJSON() {
  usrCtr++;

  const usr = {};
  usr.name = task6UserName.value;
  usr.password = task6Password.value;
  usr.email = task6Email.value;
  usr.number = task6Number.value;
  usr.address = task6Address.value;
  users.push(usr);
  console.log(usr);
  console.log(users);

  page1.classList.add('hidden');
  page2(usr);

  //   const nameLi = document.createElement('li');
  //   nameLi.innerHTML = usr.name;
  //   const passwordLi = document.createElement('li');
  //   passwordLi.innerHTML = usr.password;
  //   const emailLi = document.createElement('li');
  //   emailLi.innerHTML = usr.email;
  //   const numberLi = document.createElement('li');
  //   numberLi.innerHTML = usr.number;
  //   const addressLi = document.createElement('li');
  //   addressLi.innerHTML = usr.address;

  //   document.querySelector('.userUl').appendChild(nameLi);
  //   document.querySelector('.userUl').appendChild(passwordLi);
  //   document.querySelector('.userUl').appendChild(emailLi);
  //   document.querySelector('.userUl').appendChild(numberLi);
  //   document.querySelector('.userUl').appendChild(addressLi);

  for (let i = 0; i < 5; i++) {
    document.forms['myForm'][`inputField${i}`].value = '';
  }
  document.querySelector('.task6-submit-button').disabled = true;
}

function page2(usr) {
  const noticeUser = document.createElement('h1');
  noticeUser.innerHTML = `YOUR FORM IS SUCCESSFULLY SUBMITTED ${usr.name.toUpperCase()}`;
  noticeUser.style.visibility = 'initial';
  noticeUser.style.color = 'black';
  noticeUser.style.position = 'absolute';
  noticeUser.style.top = '0px';
  console.log(noticeUser);
  page1.appendChild(noticeUser);
}
