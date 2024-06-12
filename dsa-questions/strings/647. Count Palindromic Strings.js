/*
Input: s = "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".
*/

/*
Input: s = "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
*/

function countPalindrome(str, left, right){
    let count=0;
    while(left>=0  && right<str.length && str[left]===str[right]){
        count++;
        right++;
        left--;
    }
    return count;
}
var countPalindromicString = function(str){
    let count = 0;

    for(let i=0;i<str.length;i++){
        count += countPalindrome(str,i,i)
        count += countPalindrome(str,i,i+1)
    }

    return count;

}

const count = countPalindromicString("abccbc");
console.log(count);