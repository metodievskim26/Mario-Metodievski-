function sentence(array){
    let printSentence = "";
    for(i=0; i<array.length; i++){
        printSentence += array[i];
        printSentence += " ";
    }
    console.log (printSentence);
}


let arrStrings = ['Mario', 'is', 'a', 'sedc', 'student'];
const printNewSentence = sentence(arrStrings);
