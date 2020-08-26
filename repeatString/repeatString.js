const repeatString = function(word, num) {
    originalWord = word
    if (num == 0) {
        return '';
    }
    else if (num < 0) {
        return 'ERROR';
    }
    else {
        for(i = 0; i < (num - 1); ++i) {
            word += originalWord;
        }
    }
    return word;
}

module.exports = repeatString
