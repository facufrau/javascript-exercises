const findTheOldest = function(peopleArray) {
    const oldest = peopleArray.reduce((previous, next) => {
        if (!previous.yearOfDeath) {
            previous["yearOfDeath"] = new Date().getFullYear();
        }
        if (!next.yearOfDeath) {
            next["yearOfDeath"] = new Date().getFullYear();
        }

        let previousAge = previous.yearOfDeath - previous.yearOfBirth;
        let nextAge = next.yearOfDeath - next.yearOfBirth;

        if (previousAge < nextAge){
            return next;
        } else {
            return previous;
        }
    })
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
