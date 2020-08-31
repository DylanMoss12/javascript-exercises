const caesar = function(input, shift) {
    let length = input.length;
    let output = "";

    if (shift > 26) {
        shift = newShift(shift);
    }

    for (i = 0; i < length; i++) {
        if (isLowerCase(input.charAt(i))) {
            let code = input.charCodeAt(i);
            let newCode = code + shift;
            if (newCode > 122) {
                newCode = 96 + (newCode - 122);
            }
            if (newCode < 97) {
                newCode = 123 - (97 - newCode);
            }
            let newLetter = String.fromCharCode(newCode);
            output += newLetter;
        }
        else if (isUpperCase(input.charAt(i))) {
            let code = input.charCodeAt(i);
            let newCode = code + shift;
            if (newCode > 90) {
                newCode = 64 + (newCode - 90);
            }
            if (newCode < 65) {
                newCode = 91 - (65 - newCode);
            }
            let newLetter = String.fromCharCode(newCode);
            output += newLetter;
        }
        else {
            output += input[i];
        }
    }
    
    return output;
}

function isLowerCase(char) {
    return char.match(/[a-z]/);
}

function isUpperCase(char) {
    return char.match(/[A-Z]/);
}

function newShift(number) {
    while(number > 26) {
        number -= 26;
    }
    return number;
}

module.exports = caesar
