/**
 * @param {number[]} nums
 * @return {number[]}
 */
//Todo: I need to find a way to do this without using extra space
var rearrangeArray = function (nums) {
    nums = nums.sort((a, b) => a - b);
    console.log(nums);
    for(let i = 0;i < nums.length;i++){
       if((nums[i-1] + nums[i+1]) / 2 == nums[i]){
        let temp = nums[i - 1]
        nums[i - 1] = nums[i]
        nums[i] = temp
       }
    }
    return nums
};
let sth = rearrangeArray([3,1,12,10,7,6,17,14,4,13])
console.log(sth);
