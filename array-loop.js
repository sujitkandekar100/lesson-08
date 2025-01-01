function array(Array){
    let min=Math.min(...Array);
    let max=Math.max(...Array);
    console.log(`In Array min number:${min} and max number :${max}`);
}
const Array1=[1,-5,6,7,2,0];
array(Array1);

function countWords(words) {
    const wordCounts = {};

    for (const word of words) {
        wordCounts[word] = (wordCounts[word] || 0) + 1;
    }

    return wordCounts;
}

const words = ['fig', 'grape', 'grape'];
const result = countWords(words);
console.log(result);
function FizzBuzz(num){
  for(i=1;i<num;i++){
      if(i%3===0)
      {
        console.log('Fizz');
      }
      else if(i%5===0){
        console.log('Buzz');
      }
      else{
        console.log(i);
      }
  }
}
let num=20;
FizzBuzz(num);

function findIndex(array) {
    const Counts = {};

    for (const i of array) {
        Counts[i] =Counts[i] ;
    }

    return Counts;
}
let array12=[1,2,2,5,3,4,4];
console.log(findIndex(array12));