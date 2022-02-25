const repeatString = function(string, times) {
    let result = '';
    for (let i = 0; i < times; i++) {
        result += string;
    }

    return times >= 0? result: 'ERROR';
};

// Do not edit below this line
module.exports = repeatString;

