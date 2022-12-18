//Homework part 1

function typeOfInput(input) {
    console.log("The type of input is: ", typeof input);
}
typeOfInput(null);
typeOfInput(26 > 32);
typeOfInput(26);
typeOfInput('Mario');
typeOfInput();



//Homework part 2

function ageConversion(age, ConversionType) {
    if (Number.isNaN(age) || typeof age !== 'number') {
        return 'Invalid input, please enter a number';
    }
    if (ConversionType !== 'HumanToDogYears' && ConversionType !== 'DogToHumanYears') {
        return 'Please enter a valid conversion type';
    }
    if (ConversionType === 'HumanToDogYears') {
        return (result = age * 7);
    }
    else {
        return (result = age / 7);
    }
}
const convertedAge = ageConversion(26, "DogToHumanYears");
console.log(convertedAge);



//Homework part 3

function ATM(money, atmMoney) {
    
    if (Number.isNaN(money) && typeof money !== 'number') {
        return 'Invalid input';
    }
    if (money > atmMoney) {
        return 'Not enough money for the transfer';
    }
    const result = atmMoney - money;
    return result;
}
const atmMoney = 10000;
const userInput = Number(prompt("How much money do you want to withdraw?"))
const moneyLeft = ATM(userInput, atmMoney);
console.log(moneyLeft);
