const reverseString = function(string) {
    let num = 1;
    let result = "";
    for (i = 0; i < string.length; i++) {
        result += string.charAt((string.length - num));
        ++num;
    }
    return result;
}

module.exports = reverseString
