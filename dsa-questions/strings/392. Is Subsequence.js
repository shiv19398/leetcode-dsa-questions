/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    var str = String(s[0]);
    let i=0;
    for(let j=0;j<t.length;j++){
        if(s[i]===t[j]){
            i++;
        }
    }

    if(i===s.length) return true;

    return false; 

};

isSubsequence('abc', 'ahbgdc');