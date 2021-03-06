/* eslint "import/prefer-default-export":"off" */
import { readLocalStorage, writeLocalStorage } from './local-storage.module.js';

function removeItems(toDelete) {
  const items = readLocalStorage();
  toDelete.forEach((element) => {
    const index = items.findIndex((item) => item.id === element);
    items.splice(index, 1);
  });
  items.forEach((item, index) => {
    item.id = index + 1;
    items[index] = item;
  });
  writeLocalStorage(items);
}

export { removeItems };
