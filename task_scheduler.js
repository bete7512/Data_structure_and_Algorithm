var leastInterval = function (tasks, n) {
    if (n == 0) return tasks.length;
    let minimized = tasks.filter((el, index) => tasks.indexOf(el) == index);
    let counter = new Array(minimized.length).fill(0);
    for (let i = 0; i < minimized.length; i++) {
        for (let j = 0; j < tasks.length; j++) {
            if (tasks[j] == minimized[i]) {
                counter[i]++;
            }
        }
    }
    let max = Math.max(...counter);
    const lastRow = counter.filter(x => x === max).length;
    let sunn = (n + 1) * (max - 1) + lastRow;
    return Math.max(sunn, tasks.length);
};
let sth = leastInterval(["A","A","B"], 4)
// leastInterval(["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"], 2)
// let sth = leastInterval(["A","A","A","B","B","B", "C","C","C", "D", "D", "E"],2)
console.log(sth);
// let sum = counter.reduce(((sum, task) => (task > 1) ? sum += n * (max - 1) + 1 : sum += task), 0)
// let sums = counter.reduce
    // counter = counter.filter((el, index) => counter.indexOf(el) == index)