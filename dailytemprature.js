/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    let result = new Array(temperatures.length).fill(0);
    for (let i = 0; i < temperatures.length; i++) {
        let temp = temperatures[i];
        if (temp < temperatures[i + 1]) {
            result[i] += 1
        }
        else {
            let j = i;
            if (j == temperatures.length - 1) {
                console.log("from zero", i);
                result[i] = 0;
                break
            }
            let notYet = true;
            console.log("sth",temperatures[j],i);
            console.log("sth",temp,i);
            while (temperatures[j] >= temp) {
                // console.log("am here", j);
                // ++j;
                // if (temperatures[j] <= temp) {
                //     result[i]++;
                // }
                // else {
                //     result[i]++;
                //     notYet = false;
                // }
                // result[i]++
                j++
            }
            result[i] = temperatures[i]-temperatures[j]
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