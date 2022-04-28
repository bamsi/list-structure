/* eslint "import/prefer-default-export":"off" */
import { readLocalStorage, writeLocalStorage } from './local-storage.module.js';

function removeItems(toDelete) {
  const items = readLocalStorage();
  toDelete.forEach((element) => {
    items.splice(toDelete[element - 1], 1);
  });
  items.forEach((item, index) => {
    item.id = index + 1;
    items[index] = item;
  });
  writeLocalStorage(items);
}

export { removeItems };
