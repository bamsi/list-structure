import { addListItem } from './add.module.js';
import { readLocalStorage } from './local-storage.module.js';

jest.mock('./local-storage.module');

describe('Should add item to the list', () => {
  test('add item to the list', () => {
    addListItem('List item 1');
    addListItem('List item 2');
    addListItem('List item 3');
    const nList = (readLocalStorage('list')).length;
    expect(nList).toBe(3);
  });
});