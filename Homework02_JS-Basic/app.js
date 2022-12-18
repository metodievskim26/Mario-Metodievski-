const userInput = Number(prompt("Enter the year you were born"));
const year = userInput;
if (Number.isNaN(userInput) || typeof userInput !== 'number') {
    console.log('Enter a number!!!');
}
else {
    const zodiacSign = (year - 4) % 12;
    switch (zodiacSign) {
        case 0:
            console.log('Your Zodiac sign is Rat');
            break;
        case 1:
            console.log('Your Zodiac sign is Ox');
            break;
        case 2:
            console.log('Your Zodiac sign is Tiger');
            break;
        case 3:
            console.log('Your Zodiac sign is Rabit');
            break;
        case 4:
            console.log('Your Zodiac sign is Dragon');
            break;
        case 5:
            console.log('Your Zodiac sign is Snake');
            break;
        case 6:
            console.log('Your Zodiac sign is Horse');
            break;
        case 7:
            console.log('Your Zodiac sign is Goat');
            break;
        case 8:
            console.log('Your Zodiac sign is Monkey');
            break;
        case 9:
            console.log('Your Zodiac sign is Rooster');
            break;
        case 10:
            console.log('Your Zodiac sign is Dog');
            break;
        case 11:
            console.log('Your Zodiac sign is Pig');
            break;
        default:
            console.log('Invalid Input');
    }

}