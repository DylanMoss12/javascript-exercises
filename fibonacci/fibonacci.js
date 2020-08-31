const fibonacci = function(num) {
    if (num < 0) {
        return 'OOPS';
    }
    let sequence = fibb(num);
    return sequence;
}

let fib = [];

fib[0] = 1;
fib[1] = 1;

function fibb(num) {
    for (i = 2; i < num; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
    }
    return fib[num - 1];
}

module.exports = fibonacci
