import { completed } from './completed.module.js';
import { addListItem } from './add.module.js';
import { readLocalStorage } from './local-storage.module.js';

jest.mock('./local-storage.module');

describe('should update completed status', () => {
  test('update completed status', () => {
    addListItem('new item added');
    completed(1, true);
    const item = readLocalStorage();
    expect(item[0].completed).toBeTruthy();
  });
});
