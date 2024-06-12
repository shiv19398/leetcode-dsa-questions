/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const map = new Map();
    let length=0;
    let flag = false;
    for(let char of s){
        map.set(char, map.get(char)+1 || 1);
    }

    for(let char of s){
        let value = map.get(char);
        if(value>1){
            length += 2;
            map.set(char, value-2);
        }else if(value === 1){
            flag = true;
        }
    }
    

    if(flag) length++;

    return length;
    
};

const length = longestPalindrome("b")
console.log(length);