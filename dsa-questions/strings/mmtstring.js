/* 
You will get a string input "(a-(b+c)+d)" and you have to evaluate the expression so the output string becomes: a-b-c+d You will have +,-,* signs only in the expression. One more example is: (pp) - (a-b) , output will be: pp-a+b
*/

const str = "(a-(b+c)+d)";
const str1 = "(pp) - (a-b)"

function getExpression(str){
    let res = '';
    for(let i=0;i<str.length;i++){
        if(!((str[i]==='(') || (str[i]===')'))){
            res += str[i];
        }
    }

    return res;
}

console.log(getExpression(str1));