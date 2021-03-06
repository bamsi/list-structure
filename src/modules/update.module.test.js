import { update } from './update.module.js';
import { addListItem } from './add.module.js';
import { readLocalStorage } from './local-storage.module.js';

jest.mock('./local-storage.module');

describe('should update list item', () => {
  test('update list description', () => {
    addListItem('New item were added!');
    const newItem = {
      id: 1,
      description: 'I have updated new item were added',
    };
    update(newItem);
    const item = readLocalStorage();
    expect(item[0].description).toBe(newItem.description);
  });
});