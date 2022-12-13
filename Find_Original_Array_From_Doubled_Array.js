/**
 * @param {number[]} changed
 * @return {number[]}
 */
var findOriginalArray = function(changed) {
    if(changed.length <= 1) return []
    changed = changed.sort((a,b)=>a-b)
    let len = changed.length / 2;
    let original = new Array(len);
    let get = true
    for(let i = 0;i < changed.length && len;i++){
        if(changed[i] * 2 == changed[len]){
            original.push(changed[i])
            console.log(changed[i]);
            get = true
        }
        else{
            return []
        }
        len++
    }
    return original
    
};

// output:[1,3,4]
let sth = findOriginalArray([1,3,4,2,6,8])
console.log(sth);
// oninput:[]
let sth2  = findOriginalArray([6,3,0,1])
console.log(sth2);