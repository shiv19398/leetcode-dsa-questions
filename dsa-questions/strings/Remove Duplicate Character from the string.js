/*
const str = "Hello World"
res = "Helo Wrd"
*/

function removeDuplicateCharacters(str){
    let res = '';
    const set = new Set();

    for(let char of str){
        if(set.has(char)){
            continue;
        }else{
            set.add(char);
            res += char;
        }
    }
    return res;
}

const str = "Hello World";
const newStr = removeDuplicateCharacters(str);
console.log(newStr);