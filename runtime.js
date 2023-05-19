const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(tinyArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(tinyArray);
let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);


function addToZero(arr){
    let itDoes = false;
    arr.forEach(element => {
        if(arr.includes(-element)){
            itDoes = true;
        }
    });
    console.log(itDoes)
}
addToZero([]);
// -> False

addToZero([1]);
// -> False

addToZero([1, 2, 3]);
// -> False

addToZero([1, 2, 3, -2]);
// -> True

function hasUniqueChars(str){
    let strArr = str.split("")
    strSet = new Set (strArr)
    strSet = [...strSet].join("");
    if(strSet === str){
        console.log(true)
    }else{
        console.log(false)
    }
}
hasUniqueChars("Monday");
// -> True

hasUniqueChars("Moonday");
// -> False

function isPangram(str){
    let itDoes = true;
    let alphabet = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ]
    //another alt uses regex to remove whitespace
    // let strArr = str.replace(/\s+/g, '')
    let strArr = str.toUpperCase().split(" ").join("").split("")
    // console.log(strArr)
    alphabet.forEach(char => {
        if(!strArr.includes(char)){
            itDoes = false
        }
    });
    console.log(itDoes)

}
isPangram("The quick brown fox jumps over the lazy dog!");
// -> True

isPangram("I like cats, but not mice");
// -> False

function findLongestWord(arr){
    let max = 0
    arr.forEach(element => {
        let letters = element.length
        if(letters > max){
            max = letters
        }
    });
    console.log(max)
}
findLongestWord(["hi", "hello"]);
// -> 5