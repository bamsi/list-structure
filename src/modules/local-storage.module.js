function readLocalStorage() {
  let data = [];
  if (JSON.parse(window.localStorage.getItem('list'))) { data = JSON.parse(window.localStorage.getItem('list')); }
  return data;
}

function writeLocalStorage(data) {
  window.localStorage.setItem('list', JSON.stringify(data));
}

export { readLocalStorage, writeLocalStorage };
