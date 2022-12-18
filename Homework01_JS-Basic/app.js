const phonePrice = 119.95;
const numberOfPhones = Number(prompt("Enter number of phones"));
const convertedNumberOfPhones = numberOfPhones;
const tax = phonePrice * 0.05;
const totalPrice = (phonePrice + tax) * convertedNumberOfPhones;
console.log(`The total price of ${convertedNumberOfPhones} phones is: ${totalPrice}`);