function Algo() {}

Algo.prototype.reverse = function(str) {
    // TODO: Your code here
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
};

Algo.prototype.isPalindrome = function(str) {
    // TODO: Your code here
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    if (result == str) {
        return true;
    }
    return false;
};

Algo.prototype.capitalize = function(str) {
    // TODO: Your code here
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (i == 0) {
            result += str[i].toUpperCase();
        } else {
            result += str[i];
        }
    }
    return result;
};

module.exports = Algo;