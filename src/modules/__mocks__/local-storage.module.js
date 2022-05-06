const localStorageMock = (() => {
  const store = {};
  return {
    getItem(key) {
      const item = store[key] || null;
      return item;
    },
    setItem(key, value) {
      store[key] = value;
    },
  };
})();

const readLocalStorage = () => {
  let data = [];
  if (localStorageMock.getItem('list') !== null) data = JSON.parse(localStorageMock.getItem('list'));
  return data;
};
const writeLocalStorage = (value) => localStorageMock.setItem('list', JSON.stringify(value));

module.exports = { readLocalStorage, writeLocalStorage };
