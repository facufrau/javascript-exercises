const reverseString = function(originalString) {
    let reversed = "";
    for(let i = originalString.length - 1; i >= 0; i--){
        reversed += originalString[i];
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
