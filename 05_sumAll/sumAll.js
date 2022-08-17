const sumAll = function(n, m) {
    sum = 0;

    if(!Number.isInteger(n) || !Number.isInteger(m)) {return "ERROR"}

    if(n < 0 || m < 0) {return "ERROR"}

    if(n < m) {
        for(let i = n; i <= m; i++) {
            sum += i;
        }
    }
    else {
        for(let i = m; i <= n; i++) {
            sum += i;
        }
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
