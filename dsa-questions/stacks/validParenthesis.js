/*Given a string containing just the characters "(", ")", "{“, "}", "[", and "]", determine if the input string is valid. An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
*/

const str = "([]{})"

//stack - LIFO
// push - stack.push()
// pop - stack.pop()
function validParenthesis(str){
    const stack= [];

    for(let char of str){
        const top = stack[stack.length-1];

        if(checkParenthesis(top,char)){
            stack.pop();
        }
        else{
            stack.push(char);
        }
    }

    return stack.length?false:true;
}

function checkParenthesis(a,b){
    if((a==='(' && b===')') || (a==='{' && b==='}') || (a==='[' && b===']') ){
        return true;
    }
    return false;
}

console.log(validParenthesis(str));