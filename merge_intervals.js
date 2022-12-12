let merge = function (intervals) {
    if (intervals.length <= 1) return intervals;
    intervals = intervals.sort((a, b) =>a[0] - b[0]);
    let holder = [intervals[0]];
    let current = intervals[0];

    for(let i = 1;i<intervals.length;i++){
        let next = intervals[i];
        if(current[1]>=next[0]){
            current[1] = Math.max(current[1],next[1]);
        }
        else{
            current = next;
            holder.push(current);
        }
    }
    console.log(holder);
    return holder;
};

merge([[1,3],[2,6],[8,10],[15,18]])
