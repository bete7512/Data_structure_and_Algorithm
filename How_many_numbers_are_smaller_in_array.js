/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
   let arr = []
    nums.map((elem)=>{
        counter = 0,
        nums.forEach((e)=>{
            if(elem>e){
                counter++
            }
        })
        arr.push(counter) 
    })
    return arr
};