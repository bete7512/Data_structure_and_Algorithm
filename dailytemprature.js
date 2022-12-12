/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    let result = new Array(temperatures.length).fill(0);
    for (let i = 0; i < temperatures.length; i++){
        if (temperatures[i] < temperatures[i + 1]){
            result[i] += 1
        }
        else{
            let j = temperatures.indexOf(temperatures[i]);
            console.log(j);
            let test = 0
            while (temperatures[i] >= temperatures[j]){
                console.log("paired",temperatures[i],temperatures[j]);
                test = test + 1
                j++;
            }
            console.log("tests",test);
            result[i] = test;
            // result[i] = temperatures[i]-temperatures[j]
        }
    }
    return result;
};
let temperatures = dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])
console.log(temperatures);
// Output: [1, 1, 4, 2, 1, 1, 0, 0]
// output: [73, 74, 75, 71, 69, 72, 76, 73]
// let temperatures1 = dailyTemperatures([30, 40, 50, 60]);
// console.log("1", temperatures1);
// Output: [1,1,1,0]
// let temperatures2 = dailyTemperatures([30, 60, 90])
// console.log(temperatures2);
// Output: [1, 1, 0]