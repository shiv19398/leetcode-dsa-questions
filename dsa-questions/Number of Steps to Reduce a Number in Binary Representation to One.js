/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function(s) {
    if(('1'.localeCompare(s))===0) return 0;
    let steps=0;

    while(('1'.localeCompare(s))!==0){
        const char = s[s.length-1];
        if(char === '1'){
            s = addBinary(s,'1');
        }else{
            let num = parseInt(s,2);
            num = num/2; 
            s = num.toString(2);
        }
        steps++;
    }

    return steps;
};

function addBinary(a,b){
    let result='';
    let carry =0;
    
    let i=a.length-1;
    let j=b.length-1;

    while(i>=0 || j>=0){
        let bitA = i>=0?Number.parseInt(a[i]):0;
        let bitB = j>=0?Number.parseInt(b[j]):0;

        const sum = bitA+bitB+carry;
        result = (sum%2)+result;
        carry = Math.floor(sum/2);

        i--;
        j--;
    }

    if(carry>0){
        result = carry + result;
    }

    return result;
}

console.log(numSteps('10'))

// medium approach
// conver the binary representation of number into decimal
function convertToDecimal(binaryString){
    return parseInt(binaryString,2);
}

function isEven(num){
    return num%2===0;
}

function getSteps(binaryString){
    let num = parseInt(binaryString,2);
    let steps=0;

    while(num!==1){
        steps++;
        num = num%2===0?num/2:num+1;
    }

    return steps;
}

const steps = getSteps("1111011110000011100000110001011011110010111001010111110001");
console.log(steps);
