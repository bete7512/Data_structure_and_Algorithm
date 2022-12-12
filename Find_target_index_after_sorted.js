/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums,target) {
    let holder = []
    nums = nums.sort((a,b)=>a-b)
    console.log(nums)
    for (let i=0; i< nums.length;i++){
        if(target === nums[i]){
            holder.push(i)
        }
    }
    return holder
};

let test = targetIndices([1,2,5,2,3], 3)
console.log(test);