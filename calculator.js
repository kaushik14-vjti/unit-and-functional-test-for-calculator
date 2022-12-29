// program for a simple calculator
const prompt = require('prompt');

// take the operator input
// prompt.start();
// prompt.get(['FirstNumber', 'SecondNumber', 'Operator'], (err,result) => {
//     if(err){
//         console.log("Error while inputting");
//     }else{
//         const num1 = parseFloat(result.FirstNumber);
//         const num2 = parseFloat(result.SecondNumber);
        
//         const res = calculator(num1,num2, result.Operator);
//         // display the result
//         console.log(`${num1} ${result.Operator} ${num2} = ${res}`);
//     }
// });



function calculator(num1, num2, operator){
    let result;
    if (operator == '+') {
        result = add(num1, num2);
    }
    else if (operator == '-') {
        result = sub(num1, num2);
    }
    else if (operator == '*') {
        result = mul(num1, num2);
    }
    else if(operator == '/') {
        result = div(num1, num2);
    }else{
        //console.log('wrong operator!!');
        return 'Wrong operator';
    }
    return result; 
}

function add(num1, num2){
    return  num1 + num2
}
function sub(num1, num2){
    return  num1 - num2
}
function mul(num1, num2){
    return  num1 * num2
}
function div(num1, num2){
    return  num1 / num2
}

module.exports.calculator = calculator;

module.exports.add = add;
module.exports.sub = sub;
module.exports.mul = mul;
module.exports.div = div;