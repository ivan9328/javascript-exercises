const palindromes = function (str) {
    str = str.toLowerCase();
    str = str.replace(/[^a-z0-9]/gi, '');

    let revStr = '';
    for (var i = str.length - 1; i >= 0; i--) { 
        revStr += str[i]; 
    }

    if(revStr === str) {
        return true;
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
