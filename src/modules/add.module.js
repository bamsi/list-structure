import { loadData } from "./load-data.module";
import { readLocalStorage, writeLocalStorage } from "./local-storage.module";

function addListItem(description) {
  const items = readLocalStorage();
  const index = items.length + 1;
  const item = {
    id: index,
    description: description,
    completed: false,
  };
  items.push(item);
  writeLocalStorage(items);
  loadData();
}

export { addListItem };
