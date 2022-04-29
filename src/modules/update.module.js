/* eslint "import/prefer-default-export":"off" */
import { readLocalStorage, writeLocalStorage } from './local-storage.module.js';

function update(item) {
  const items = readLocalStorage();
  const element = items.filter((i) => i.id === item.id)[0];
  element.description = item.description;
  items[item.id - 1] = element;
  writeLocalStorage(items);
}

function completed(index, status) {
  const items = readLocalStorage();
  const element = items.filter((i) => i.id === index)[0];
  element.completed = status;
  items[index - 1] = element;
  writeLocalStorage(items);
}

export { update, completed };
