function fullNames(array1, array2) {
    let fullName = [];
    for (i = 0; i < array1.length; i++) {
        fullName.push(i+1 + ". " + array1[i] + ' ' + array2[i]);
    }
    return fullName;
}

let arrayExample1 = ['Mario', 'Belisima', 'Nikola', 'Tamara'];
let arrayExample2 = ['Metodievski', 'Lukarova', 'Petrovski', 'Pridaenkoska'];
const arrEx1 = fullNames(arrayExample1, arrayExample2);
console.log(arrEx1);
