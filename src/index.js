/* eslint "import/prefer-default-export":"off" */
/* eslint-disable */
import _ from "lodash";
/* eslint-enable */
import './style.css';
import { addListItem } from './modules/add.module.js';
import { loadData } from './modules/load-data.module.js';
import { update, completed } from './modules/update.module.js';
import { removeItems } from './modules/remove.module.js';

const newItem = document.querySelector('#add-list');
let deleteList = [];

window.onload = loadData();

newItem.addEventListener('click', () => {
  const description = document.getElementById('description');
  if (description.value !== '') {
    addListItem(description.value);
    description.value = '';
    window.location.reload();
  }
});

const links = document.querySelectorAll('.list-desc');

function hideAll() {
  links.forEach((e) => {
    const item = e.getAttribute('id');
    const input = document.querySelector(item);
    input.classList.add('hide');
  });
}

function deleteItem(index) {
  index = parseInt(index, 10);
  const square = `square_${index}`;
  const tick = `tick_${index}`;
  const listDesc = `#list_${index}`;
  const inactiveItem = document.getElementById(square);
  const activeItem = document.getElementById(tick);
  const listItem = document.getElementById(listDesc);
  inactiveItem.style.display = 'none';
  activeItem.style.display = 'inline';
  listItem.style.textDecoration = 'line-through';
  deleteList.push(index);
  completed(index, true);
}

function activateItem(index) {
  index = parseInt(index, 10);
  const square = `square_${index}`;
  const tick = `tick_${index}`;
  const listDesc = `#list_${index}`;
  const activeItem = document.getElementById(square);
  const inactiveItem = document.getElementById(tick);
  const listItem = document.getElementById(listDesc);
  inactiveItem.style.display = 'none';
  activeItem.style.display = 'inline';
  listItem.style.textDecoration = 'none';
  deleteList = deleteList.filter((item) => item !== index);
  completed(index, false);
}

links.forEach((e) => {
  e.addEventListener('click', () => {
    e.classList.add('hide');
    const item = e.getAttribute('id');
    const input = document.querySelector(item);
    input.classList.remove('hide');
    input.addEventListener('focusout', () => {
      const index = parseInt(item.split('_')[1], 10);
      const newItem = {
        id: index,
        description: input.value,
      };
      update(newItem);
      e.classList.remove('hide');
      hideAll();
      window.location.reload();
    });
  });
});

const checkedItem = document.querySelectorAll('.item-check');

checkedItem.forEach((e) => {
  e.addEventListener('click', () => {
    const item = e.getAttribute('id');
    const arr = item.split('_');
    const index = parseInt(arr[1], 10);
    if (arr[0] === 'square') {
      deleteItem(index);
    } else {
      activateItem(index);
    }
  });
});

const clearItem = document.getElementById('clear-items');
clearItem.addEventListener('click', () => {
  removeItems(deleteList);
  deleteList = [];
  window.location.reload();
});
