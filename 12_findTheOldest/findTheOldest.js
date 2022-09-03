


const findTheOldest = function(pArr) {
    const oldest = pArr.sort(function(a, b) {
        curYear = ((new Date()).getFullYear());
        let last = 0;
        let next = 0;
        if(a.yearOfDeath === undefined) {
            last = curYear - a.yearOfBirth;
        } else {
            last = a.yearOfDeath - a.yearOfBirth;
        }

        
        if(b.yearOfDeath === undefined) {
            next = curYear - b.yearOfBirth;
        } else {
            next = b.yearOfDeath - b.yearOfBirth;
        }

        console.log(a, last);
        console.log(b, next);
        return last > next ? -1 : 1;
      });
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
