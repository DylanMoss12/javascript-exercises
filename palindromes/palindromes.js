const palindromes = function(string) {
    let newString = string.replace(/[ ,.!]/g, '');
    newString = newString.toLowerCase();
    let length = newString.length;
    for (i = 0; i < length; i++) {
        if (i > (length / 2)) {
            return true;
        }
        else {
            if (newString.charAt(i) != newString.charAt((length - (i + 1)))) {
                return false;
            }
            else {
                continue;
            }
        }
    }
}       

module.exports = palindromes
