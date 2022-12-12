let largestNumber = (nums) => {
    return nums.sort((a, b) => ('' + b + a) - ('' + a + b))
               .join('')
               .replace(/^0*/g, '') || "0";

};
let test = largestNumber([34323, 3432])
console.log(test);
let sth = largestNumber([3,30,34,5,9])
