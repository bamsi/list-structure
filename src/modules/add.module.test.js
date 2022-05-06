import { addListItem } from './add.module';
import { readLocalStorage } from './local-storage.module';
jest.mock('./local-storage.module');

describe('Should add item to the list', function(){

    test('add item to the list', ()=>{
        addListItem('List item 1');
        addListItem('List item 2');
        addListItem('List item 3');
        const nList = (readLocalStorage('list')).length;
        expect(nList).toBe(3);
    })
})