const fibonacci = function(limitNumber) {
    let start = 0;
    let current = 1;
    let next;
    limitNumber = parseInt(limitNumber);
    if (limitNumber < 0){
        return "OOPS";
    } else if (limitNumber === 1){
        return current;
    } else if (limitNumber === 2) {
        return current;
    } else {
        for(let i = 1; i < limitNumber; i++) {
            next = current + start;
            start = current;
            current = next;
        }
        return next;
    };
}

// Do not edit below this line
module.exports = fibonacci;
