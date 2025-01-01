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
