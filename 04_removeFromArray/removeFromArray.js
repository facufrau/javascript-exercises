const removeFromArray = function(dataArray, ...itemsToRemove) {
    const modifiedArray = [...dataArray];
    for (let i = 0; i < itemsToRemove.length; i++){
        const indexToRemove = modifiedArray.indexOf(itemsToRemove[i]);
        if (indexToRemove >= 0) {
        modifiedArray.splice(indexToRemove, 1)
        }
    }
    return modifiedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
