const getTheTitles = function(array) {
    let length = array.length;
    let result = [];
    for (i = 0; i < length; i ++) {
        let book = array[i];
        result[i] = book.title
    }
    return result;
}

// const bookList = books.map(book => book.title);
// return bookList

module.exports = getTheTitles;
