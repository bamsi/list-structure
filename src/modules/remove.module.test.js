/* eslint "import/prefer-default-export":"off" */
import { addListItem } from './add.module.js';
import { removeItems } from './remove.module.js';
import { readLocalStorage } from './local-storage.module.js';

jest.mock('./local-storage.module');

describe('should remove item from the list', () => {
  test('remove one item from the list', () => {
    addListItem('List item 1');
    addListItem('List item 2');
    addListItem('List item 3');
    removeItems([2]);
    const n = (readLocalStorage('list')).length;
    expect(n).toBe(2);
  });
});