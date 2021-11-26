console.clear();
// #12 | 100 Days of Psycho Coding Challenge
// Calculate the Total Price of Groceries
// Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number. A grocery object has a product, a quantity and a price, for example:

// {
//   "product": "Milk",
//   "quantity": 1,
//   "price": 1.50
// }

// Examples
// // 1 bottle of milk:
// getTotalPrice([
//   { product: "Milk", quantity: 1, price: 1.50 }
// ]) ➞ 1.5

// // 1 bottle of milk & 1 box of cereals:
// getTotalPrice([
//   { product: "Milk", quantity: 1, price: 1.50 },
//   { product: "Cereals", quantity: 1, price: 2.50 }
// ]) ➞ 4

// // 3 bottles of milk:
// getTotalPrice([
//   { product: "Milk", quantity: 3, price: 1.50 }
// ]) ➞ 4.5

// // Several groceries:
// getTotalPrice([
//   { product: "Milk", quantity: 1, price: 1.50 },
//   { product: "Eggs", quantity: 12, price: 0.10 },
//   { product: "Bread", quantity: 2, price: 1.60 },
//   { product: "Cheese", quantity: 1, price: 4.50 }
// ]) ➞ 10.4

// // Some cheap candy:
// getTotalPrice([
//   { product: "Chocolate", quantity: 1, price: 0.10 },
//   { product: "Lollipop", quantity: 1, price: 0.20 }
// ]) ➞ 0.3

// https://unsplash.com/photos/wU_TbWqdPJI

// Gloabl Data
// ---------------------------------------------------------
const groceries = [
  { product: "Milk", quantity: 1, price: 1.5 },
  { product: "Eggs", quantity: 12, price: 0.1 },
  { product: "Bread", quantity: 2, price: 1.6 },
  { product: "Cheese", quantity: 1, price: 4.5 },
];

// Get the titles
// ---------------------------------------------------------
const getTitles = (groceries) => {
  return Object.keys(groceries[0]);
};

// Get the values
// ---------------------------------------------------------
const getValues = (groceries) => {
  return groceries.map((groceryItem) => {
    return Object.values(groceryItem);
  });
};

// Show the total price
// ---------------------------------------------------------
const getTotalPrice = (groceries) => {
  let totalCost = groceries.map((item) => {
    return Object.values(item)
      .slice(-2)
      .reduce((acc, num) => acc * num);
  });
  return totalCost.reduce((acc, num) => acc + num);
};

// Create the UI
// ---------------------------------------------------------
const createUI = () => {
  const groceriesParentEl = document.querySelector(".groceries");

  // Go and get the titles from groceries
  let titles = getTitles(groceries);
  titles.map((title) => {
    const groceriesListItem = document.createElement("li");
    groceriesListItem.classList.add("title");
    groceriesListItem.innerHTML =
      title.charAt(0).toUpperCase() + title.slice(1);
    groceriesParentEl.appendChild(groceriesListItem);
  });

  // Go and get the values
  let groceryValues = getValues(groceries);
  groceryValues.map((item) => {
    item.forEach((value) => {
      const groceriesListItem = document.createElement("li");
      groceriesListItem.innerHTML = value;
      groceriesParentEl.appendChild(groceriesListItem);
    });
  });

  // Get total price
  const totalPrice = getTotalPrice(groceries);
  const totalPriceEl = document.getElementById("total_price");
  totalPriceEl.innerHTML = `$ ${totalPrice.toFixed(2)}`;
};

createUI();
getTotalPrice(groceries);
