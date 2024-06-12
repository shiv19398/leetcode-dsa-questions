/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function(s, t) {
    let i=0, j=0;
    let noOfChars = 0;
    while(j<s.length){
        if(s[j]===t[i]){
            i++;
        }
        j++;
    }

    noOfChars = t.length-i;

    return noOfChars;
};