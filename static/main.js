//Exploring Conditional Statements and Loops

//Task 1: Implement a conditional statement to check if a user is logged in before allowing them to add items to the cart.

let isLoggedIn = true;

if (isLoggedIn) {
        console.log("You have successfully logged in.");
} else {
    console.log("Please log in to add items to our cart.");
}


//Task 2: Use a loop to display the list of available products to the user and add functionality for users to add products to their cart. You can hard code this out by just creating item variables or for EXTRA CREDIT figure out a way to grab user inputs. 

let availableItems = [
    { name: "iPhone 15", price: 999 },
    { name: "AirPods", price: 199 },
    { name: "MacBook", price: 1099 },
    { name: "iPad", price: 799 }
];
let cart =[];

function displayAvailableItems() {
    console.log("Available items:");
    for (let i = 0; i < availableItems.length; i++) {
        console.log(i + 1 + ". " + availableItems[i].name + " - $" + availableItems[i].price);
    }
}

displayAvailableItems();

function addItemToCart(item) {
    cart.push(availableItems[item]);
    console.log(availableItems[item].name + " has been added to the cart.");
}


addItemToCart(0);
addItemToCart(1);
addItemToCart(3);

console.log("Items in your cart:");
for (let i = 0; i < cart.length; i++) {
    console.log(cart[i].name + " - $" + cart[i].price);
}

//Task 3: Calculate the total cost of the items in the cart and display it to the user.

function totalCost() {
    let total = 0;
    cart.forEach(item => {total += item.price});
    console.log(`Total Cost: ${total}`)
  };

totalCost();

//Exploring Functions in JavaScript

let account = 0;

function deposit(amount) {
    if (amount > 0) {
        account += amount;
        console.log("$" + amount + " deposited successfully.");
    }  
};
deposit(5000);

function withdrawal(amount) {
    if (amount <= account) {
        account -= amount;
        console.log("$" + amount + " withdrawn successfully.");
    } else {
        console.log("Sorry, insufficient funds.")
    }
    
}
withdrawal(1300)

function currentBalance() {
    console.log(`Current Balance: ${account}`)
}

currentBalance();