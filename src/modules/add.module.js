/* eslint "import/prefer-default-export":"off" */

import { loadData } from './load-data.module.js';
import { readLocalStorage, writeLocalStorage } from './local-storage.module.js';

function addListItem(description) {
  const items = readLocalStorage();
  const index = items.length + 1;
  const item = {
    id: index,
    description,
    completed: false,
  };
  items.push(item);
  writeLocalStorage(items);
  loadData();
}

export { addListItem };
