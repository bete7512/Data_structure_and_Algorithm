/**
 * @param {number[]} numbs
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(numbs) {
   let arr = []
    numbs.map((elem)=>{
        counter = 0,
        numbs.forEach((e)=>{
            if(elem>e){
                counter++
            }
        })
        arr.push(counter) 
    })
    return arr
};