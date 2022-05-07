/* eslint "import/prefer-default-export":"off" */
import { readLocalStorage, writeLocalStorage } from './local-storage.module.js';

function update(item) {
  const items = readLocalStorage();
  const element = items.filter((i) => i.id === item.id)[0];
  element.description = item.description;
  items[item.id - 1] = element;
  writeLocalStorage(items);
}

export { update };
