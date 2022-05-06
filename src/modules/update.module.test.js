import { update } from "./update.module";
import { addListItem } from "./add.module";
import { readLocalStorage } from "./local-storage.module";
jest.mock('./local-storage.module');


describe('should update list item', function(){
    test('update list description', ()=>{
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