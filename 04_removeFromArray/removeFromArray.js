const removeFromArray = function(firstArg, ...restArg) {
    for (let i = 0; i < restArg.length; i++) {
        for (let j = 0; j < firstArg.length; j++) {
            if (firstArg[j] === restArg[i]) {
                firstArg.splice(j, 1);
            }
        }
    }
    return firstArg;

};


removeFromArray([1,2,3], 3,2);

// Do not edit below this line
module.exports = removeFromArray;
