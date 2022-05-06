/* eslint "import/prefer-default-export":"off" */
import { readLocalStorage, writeLocalStorage } from './local-storage.module.js';

function completed(index, status) {
    const items = readLocalStorage();
    const element = items.filter((i) => i.id === index)[0];
    element.completed = status;
    items[index - 1] = element;
    writeLocalStorage(items);
}

export {completed};