const sumAll = function(start, end) {
    if (start < 0 || end < 0){
        return "ERROR";
    } else if (typeof(start) !== "number" || typeof(end) !== "number") {
        return "ERROR";
    } else {
        let totalSum = 0;
        if (start < end) {
            while (start <= end) {
            totalSum += start;
            start += 1;
            }  
        }
        else {
            while (end <= start) {
                totalSum += end;
                end += 1;
                } 
        }
        return totalSum;
    }

};

// Do not edit below this line
module.exports = sumAll;
