const removeFromArray = function(array) {
    let argumentsLength = arguments.length;
    let position = 1;
    for (i = 1; i < argumentsLength; i++) {
        let number = arguments[position];
        if (array.indexOf(number) == -1) {
            ++position;
        }
        else {
            let location = array.indexOf(number);
            array.splice(location, 1);
            ++position;
        }
    }
    return array;
}

module.exports = removeFromArray
