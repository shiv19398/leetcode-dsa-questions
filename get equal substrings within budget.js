// Brute force approach
// var equalSubstring = function(s, t, maxCost) {
//     let temp = maxCost;
//     let ml = Number.MIN_SAFE_INTEGER,
//     cl=0;

//     for(let i=0;i<s.length;i++){
//         cl=0;
//         temp = maxCost;
//         for(let j=i;j<s.length;j++){
            
//             let diff = Math.abs(s[j].charCodeAt() - t[j].charCodeAt());
//             console.log(diff);
//             temp = temp - diff;

//             if(temp<0){
//                 break;
//             }
//             else{
//                 cl++;
//                 ml = Math.max(ml,cl);
//             }
//         }
//     }

//     return ml===Number.MIN_SAFE_INTEGER?0:ml;
// };

// optimised approach
// we can make use of sliding window to find out the substrings
var equalSubstring = function(s, t, maxCost){
    let currCost = 0;
    let i=0,rs=0;

    for(let j=0;j<s.length;j++){

        currCost += Math.abs(s[j].charCodeAt() - t[j].charCodeAt());

        if(currCost>maxCost){
            currCost -= Math.abs(s[i].charCodeAt() - t[i].charCodeAt())
            i++;
        }

        if(j-i+1>rs){
            rs=j-i+1;
        }
    }

    return rs;
}

console.log(equalSubstring('abcd', 'cdef', 1));