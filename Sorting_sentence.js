/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
    var splitted = s.split(' ')
    arr = []
    splitted.map((element) => {
        let index = parseInt(element[element.length - 1])
        let sth = element.slice(0, -1)
        arr.push({ word: sth, index: index })
    })
    var str = ''
    for (let i = 1; i <= arr.length; i++) {
        arr.map((element) => {
                (element.index == i)? str = (i!=1) ? (str + " " + element.word) : element.word : console.log("bete");
        })
    }
    return str
};

let sth = sortSentence("Myself2 Me1 I4 and3")
console.log(sth);
