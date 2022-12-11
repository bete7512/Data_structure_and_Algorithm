/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    var splitted = s.split(' ')
    arr = []
    splitted.map((element)=>{
        let string = [...element]
        let index = parseInt(string[string.length - 1])
        string.pop()
      let word = string.join('')
        arr.push({word:word,index:index})
    })
    var str = []
    for(let i = 1;i<=arr.length;i++){
        for (let elemnt of arr){
            if(elemnt.index==i){
                str.push(elemnt.word)
            }
        }
    }
    let value = str.join(' ')
    return value
    };
