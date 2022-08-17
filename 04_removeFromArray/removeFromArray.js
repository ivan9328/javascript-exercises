const removeFromArray = function(theArray, ...remove) {

    for(let i = 0; i < theArray.length; i++) {
        if(contains(theArray[i], remove)) {
            theArray.splice(i, 1)
            i -= 1;
        }
    }
    return theArray
};

function contains(element, array) {
    for(let i = 0; i < array.length; i++) {
        if(element === array[i]) return true
    }
    return false
}

// Do not edit below this line
module.exports = removeFromArray;
