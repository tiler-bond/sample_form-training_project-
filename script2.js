'use strict';

const showBill = document.querySelector('.bill-list');
const total = document.querySelector('.total');
// const counter = document.querySelector('.Counter');
// const addButton = document.querySelector('.initial-button');
// const minusButton = document.querySelector('.minus-button');
// const plusButton = document.querySelector('.plus-button');
// const quantity = document.querySelector('.quantity');

total.addEventListener('click', function () {
  const x = document.querySelectorAll('.price');
  if (x.length === 0) return;
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

function addFood(food, price, obj) {
  const x = obj.closest('.add-button');
  obj.classList.add('hidden');
  x.querySelector('.Counter').classList.remove('hidden');
  const li = document.createElement('li');
  li.setAttribute('class', 'bill-list-li');
  li.style.listStyle = 'decimal';
  const itemName = document.createElement('span');
  const itemCost = document.createElement('span');
  const itemQuantity = document.createElement('span');
  const itemNameParagraph = document.createElement('p');
  const itemQuantityParagraph = document.createElement('p');
  const itemPriceParagraph = document.createElement('p');

  itemCost.setAttribute('class', 'price');
  itemName.setAttribute('class', 'item-name');
  itemQuantity.setAttribute('class', 'item-quantity');

  itemNameParagraph.innerHTML = food;
  itemQuantityParagraph.innerHTML = 1;
  itemCost.innerHTML = Number(itemQuantityParagraph.innerHTML) * price;
  itemQuantity.appendChild(itemQuantityParagraph);
  li.appendChild(itemName);
  itemName.appendChild(itemNameParagraph);
  li.appendChild(itemQuantity);
  li.appendChild(itemCost);
  showBill.appendChild(li);
}

function plus(obj) {
  console.log(
    obj.closest('.item-description').querySelector('.food-name').innerHTML
  );
  const x = obj.closest('.Counter');
  const y = x.querySelector('.quantity');
  let a = Number(y.innerHTML);
  y.innerHTML = '';
  a++;
  y.innerHTML = a;
}

function minus(obj) {
  const x = obj.closest('.Counter');
  const y = x.querySelector('.quantity');
  let a = Number(y.innerHTML);
  y.innerHTML = '';
  a--;
  y.innerHTML = a;
  if (Number(y.innerHTML) === 0) {
    x.classList.add('hidden');
    const b = obj.closest('.add-button');
    b.querySelector('.initial-button').classList.remove('hidden');
    y.innerHTML = 1;
  }
}
