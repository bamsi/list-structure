import { readLocalStorage, writeLocalStorage } from "./local-storage.module";

function update(item) {
  const items = readLocalStorage();
  let element = items.filter((i) => {
    return i.id == item.id;
  })[0];
  element.description = item.description;
  items[item.id - 1] = element;
  writeLocalStorage(items);
}

export { update };
