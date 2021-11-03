'use strict';

const addButton1 = document.querySelector('#add-item-1');
const addButton2 = document.querySelector('#add-item-2');
const addButton3 = document.querySelector('#add-item-3');
const showBill = document.querySelector('.bill-list');
const total = document.querySelector('.total');

addButton1.addEventListener('click', function () {
  const li = document.createElement('li');
  const itemCost = document.createElement('span');
  itemCost.setAttribute('class', 'price');
  itemCost.innerHTML = `${this.dataset.cost}`;
  li.innerHTML = `${this.dataset.name} `;
  li.appendChild(itemCost);
  showBill.appendChild(li);
});

addButton2.addEventListener('click', function () {
  const li = document.createElement('li');
  const itemCost = document.createElement('span');
  itemCost.setAttribute('class', 'price');
  itemCost.innerHTML = `${this.dataset.cost}`;
  li.innerHTML = `${this.dataset.name} `;
  li.appendChild(itemCost);
  showBill.appendChild(li);
});

addButton3.addEventListener('click', function () {
  const li = document.createElement('li');
  const itemCost = document.createElement('span');
  itemCost.setAttribute('class', 'price');
  itemCost.innerHTML = `${this.dataset.cost}`;
  li.innerHTML = `${this.dataset.name} `;
  li.appendChild(itemCost);
  showBill.appendChild(li);
});

total.addEventListener('click', function () {
  const x = document.querySelectorAll('.price');
  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    sum += Number(x[i].innerHTML);
  }
  console.log(sum);
  const total = sum + (18 / 100) * sum;
  console.log(total);
  const displayTotal = document.createElement('p');
  displayTotal.innerHTML = `your total is ${total}  (includes 18% GST) `;
  showBill.appendChild(displayTotal);
});
