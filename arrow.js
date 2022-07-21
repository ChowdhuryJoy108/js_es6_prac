
//without Arrow()

function doubleIt(num){
    return num * 2;
}
const result = doubleIt(10);
console.log(result); //10

// another way of declare a function like a variable.

const doubleIt2 = function(n){
    return n * 3;
}
const res = doubleIt2(10);
console.log(res); //30

// with Arrow ()

const doubleIt3 = num =>{
    return num * 4;
}
const res2 = doubleIt3(20);
console.log(res2);


//add using default value & arrow function.
const add = (num1, num2=20) =>{
    return num1 + num2;
}
console.log(add(10,4));

