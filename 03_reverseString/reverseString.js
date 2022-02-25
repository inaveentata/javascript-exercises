const reverseString = function(string) {
    let result = '';
    for (let i = 1; i < string.length; i++) {
        result += string.substr(string.length-i, 1);
    }
    result += string.substr(0, 1);

    return result;

};

reverseString('hello');

// Do not edit below this line
module.exports = reverseString;
