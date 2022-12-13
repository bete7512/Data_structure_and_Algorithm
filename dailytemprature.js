/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    let result = new Array(temperatures.length).fill(0);
    for (let i = 0; i < temperatures.length; i++){
        if(i == temperatures.length - 1){
            result[i] = 0;
            break
        }
        if (temperatures[i] < temperatures[i + 1]){
            result[i] += 1
        }
        else{
            let j = i + 1;
            while (temperatures[j] <= temperatures[i] && j < temperatures.length - 1){
                j++;
            }
            if(temperatures[i] < temperatures[j]){
                console.log(temperatures[i],temperatures[j]);
                console.log(i,j);
                result[i] = j - i;
            }
            else{
                result[i] = 0;
            }
        }
    }
    return result;
};
let test = dailyTemperatures([34,80,80,34,34,80,80,80,80,34])
console.log(test);
// [1,0,0,2,1,0,0,0,0,0]

// [8, 1, 5, 4, 3, 2, 1, 1, 0, 0]
// [89,62,70,58,47,47,46,76,100,70]

let temperatures = dailyTemperatures([73,74,75,71,69,72,76,73])
console.log(temperatures);
// Output: [1, 1, 4, 2, 1, 1, 0, 0]
// output: [73, 74, 75, 71, 69, 72, 76, 73]
let temperatures1 = dailyTemperatures([30, 40, 50, 60]);
console.log("1", temperatures1);
Output: [1,1,1,0]
let temperatures2 = dailyTemperatures([30, 60, 90])
console.log(temperatures2);
Output: [1, 1, 0]