const addToDB = (id) => {
  // an empty array to stored cart data
  let shoppingCart = {};
  // get data from local storage
  const getStoredDB = localStorage.getItem("shopping-cart");
  // checking if any data exist in localstorage
  if (getStoredDB) {
    shoppingCart = JSON.parse(getStoredDB);
  }
  // check by id is it exist in shopping cart
  const quantity = shoppingCart[id];
  // if exist increase value or else set value by 1
  if (id in shoppingCart) {
    shoppingCart[id] = quantity + 1;
  } else {
    shoppingCart[id] = 1;
  }
  //then stringify the shoppingcart and set data to localStorage
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};
const storedCartDB = () => {
    let shoppingCart = {};
  // get data from local storage
  const getStoredDB = localStorage.getItem("shopping-cart");
  // checking if any data exist in localstorage
  if (getStoredDB) {
    shoppingCart = JSON.parse(getStoredDB);
  }
  return shoppingCart;
}

const removeFromDb = (id) => {
  // an empty array to stored cart data
  let shoppingCart = {};
  // get data from local storage
  const getStoredDB = localStorage.getItem("shopping-cart");
  // checking if any data exist in localstorage
  if (getStoredDB) {
    shoppingCart = JSON.parse(getStoredDB);
  }
  if (id in shoppingCart) {
    delete shoppingCart[id];
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};
const removeCart = () => {
  localStorage.removeItem('shopping-cart');
}

export { addToDB, removeFromDb, storedCartDB , removeCart };
