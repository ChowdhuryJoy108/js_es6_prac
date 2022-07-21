function add (num1, num2 = 30){ //default parameter
    
    // if(num2 == undefined){
    //     num2 = 0;
    // } //one way

    // num2 = num2 || 20; //second way

    return num1 + num2;
}

const total  = add(15,1);
console.log(total);


// useful because of backup.
