/*
    input = "I Love JavaScript"
    result = "JavaScript Love I"

    So, we need to pick every word from the last and return a new string.
*/
// function reverseWords(str){
//     let res= '';

//     let [start, end, curr]=[0,str.length, str.length];
  

//     while(curr>=0){
//         if(str[curr]===" " || curr===0){
//             start = curr!==0 ? curr+1:curr ;
//             res += str.substring(start,end) +" ";
            
//             end = curr;
//         }
//         curr--;
//     }
//     return res.trim();
// }

//Time complexity = O(n^2)
//Space complexity = O(1)


//better approach
function reverseWords(str){
    const arr = str.split(" ");
    let res = '';
    for(let i=arr.length-1;i>=0;i--){
        res += arr[i]+" ";
    }
    return res.trim();
}

//Time complexity :O(n)
//Space Complexity :O(n)


var input = "I Love JavaScript";
const result = reverseWords(input);
console.log(result);