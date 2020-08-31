let findTheOldest = function(people) {
    let people1 = people;
    let numOfObjects = people1.length;
    for (i = 0; i < numOfObjects; i++) {
        let person = people1[i];
        if ('yearOfDeath' in person === false) {
            person["yearOfDeath"] = "2020";
        }
    }

    let sorted = people1.sort((a, b) => {
        return (a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth) ? -1 : 1;
    });

    return sorted[0];
}

module.exports = findTheOldest
