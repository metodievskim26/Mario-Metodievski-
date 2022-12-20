function sumNumbers(array){
    let max = 0;
    let min = Infinity;
    for(i = 0; i<array.length;i++){
        if(array[i] > max){
            max = array[i];
        }
        if(array[i]<min){
            min = array[i];
        }
    }
    return `Max: ${max}, Min: ${min}, Sum: ${sum = max+min}`;
}

let numbers = [13,26,44,8,17];
const newArray = sumNumbers(numbers);
console.log(newArray);
