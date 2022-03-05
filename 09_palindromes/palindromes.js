const palindromes = function (str) {
    const punctuation = ['!',',','.'];
    let new_str = '';
    for (let i = 0; i < punctuation.length; i++) {
        for (let j = 0; j < punctuation.length; j++) {
            if (punctuation[i] === punctuation[j]) {
                new_str = str.replaceAll(punctuation[i], '');
            }
            str = new_str;
        }
    }
    str = str.toLowerCase();
    str = str.replace(/ /g, '');
    return reverseString(str) === str? true: false;
};

const reverseString = function(string) {
    let result = '';
    for (let i = 1; i < string.length; i++) {
        result += string.substr(string.length-i, 1);
    }
    result += string.substr(0, 1);

    return result;
};

// Do not edit below this line
module.exports = palindromes;
