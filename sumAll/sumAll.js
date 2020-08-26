const sumAll = function(start, finish) {
    let result = 0;
    if ((typeof(start) != 'number') || (typeof(finish) != 'number') || (start < 0) || (finish < 0)) {
        return "ERROR";
    }
    else {
        if (start > finish) {
            let num1 = finish;
            finish = start;
            start = num1;
        }
        for (i = start; i < (finish + 1); ++i) {
            result += i;
        }
    }
    return result;
}

module.exports = sumAll
