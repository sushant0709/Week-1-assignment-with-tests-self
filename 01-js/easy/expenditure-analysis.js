/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategoryMyLogic(transactions) {
  var answer = [];
  transactions.forEach(transaction => {
    var targetCategory = transaction.category;
    var indexInAnswer = answer.findIndex(obj => obj.hasOwnProperty(targetCategory));
    if(indexInAnswer >= 0)
    {
      answer[indexInAnswer][targetCategory] += transaction.price; 
    }
    // if answer doesn't have that category, create a new object for that category
    else{
      var newObj = {[targetCategory]: transaction.price};
      answer.push(newObj);
    }
  });
  return answer;
}

function calculateTotalSpentByCategory(transactions) {
  var answer = [];
  transactions.forEach((transaction) => {
    var targetCategory = transaction.category;
    var indexInAnswer = answer.findIndex((obj) =>
      obj.category === transaction.category
    );
    if (indexInAnswer >= 0) {
      answer[indexInAnswer].totalSpent += transaction.price;
    }
    // if answer doesn't have that category, create a new object for that category
    else {
      var newObj = { category:targetCategory, totalSpent:transaction.price };
      answer.push(newObj);
    }
  });
  return answer;
}

// const transactions = [
// 			{
// 				id: 1,
// 				timestamp: 1656076800000,
// 				price: 10,
// 				category: 'Food',
// 				itemName: 'Pizza',
// 			},
// 			{
// 				id: 2,
// 				timestamp: 1656259600000,
// 				price: 20,
// 				category: 'Food',
// 				itemName: 'Burger',
// 			},
// 			{
// 				id: 3,
// 				timestamp: 1656019200000,
// 				price: 15,
// 				category: 'Clothing',
// 				itemName: 'T-Shirt',
// 			},
// 			{
// 				id: 4,
// 				timestamp: 1656364800000,
// 				price: 30,
// 				category: 'Electronics',
// 				itemName: 'Headphones',
// 			},
// 			{
// 				id: 5,
// 				timestamp: 1656105600000,
// 				price: 25,
// 				category: 'Clothing',
// 				itemName: 'Jeans',
// 			}
//     ];
// answer = calculateTotalSpentByCategoryMyLogic(transactions);
// answer = calculateTotalSpentByCategory(transactions);
// console.log(answer);
module.exports = calculateTotalSpentByCategory;
