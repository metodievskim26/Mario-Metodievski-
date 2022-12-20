array = ['Mario', 'happy', 'passed the frontend exam.'];

function tellStory(arr){
    return `This is ${arr[0]}, ${arr[0]} is a SEDC student. ${arr[0]} is very ${arr[1]} today because he ${arr[2]}`;
}
const story = tellStory(array);
console.log(story);
