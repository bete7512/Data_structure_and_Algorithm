/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums,target) {
    let holder = []
for(var i = 0; i < nums.length; i++){
       for(var j = 0; j < ( nums.length - i -1 ); j++){
     if(nums[j] > nums[j+1]){ 
       var temp = nums[j]
       nums[j] = nums[j + 1]
    nums[j+1] = temp
     }
   }
 }
    console.log(nums)
    for (let i=0; i< nums.length;i++){
        if(target === nums[i]){
            holder.push(i)
        }
    }
    console.log(holder)
    return holder
};