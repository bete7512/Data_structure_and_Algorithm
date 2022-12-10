'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'countSwaps' function below.
 *
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function countSwaps(a) {
    // Write your code here
    let numSwaps = 0;
    let firstElement,lastElement;
    for(let i = 0; i < a.length-1;i++){
        for(let j = i+1;j<a.length;j++){
            if(a[i]>a[j]){
                numSwaps++;
                let temp = a[i];
                a[i] = a[j];
                a[j] = temp;
            }
        }
    }
    firstElement = a[0]
    lastElement = a[a.length - 1]
    console.log("Array is sorted in",numSwaps,"swaps.")
    console.log("First Element:",firstElement)
    console.log("Last Element:",lastElement)
}
function main() {
    const n = parseInt(readLine().trim(), 10);
    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));
    countSwaps(a);
}
