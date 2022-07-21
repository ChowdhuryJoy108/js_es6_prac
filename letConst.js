// we will not use var from now will use const/let

const hubby = "Elias kanchon";
// hubby = "Omar Sunny"; // can not do this cause we hae declare hubby with const keyword.
console.log(hubby);

const numbers = [12,17];
numbers[1] = 33; // it will work with const 
numbers.push(100); // it will also work with const
console.log(numbers);

// numbers = ['sunny','omer','rony'];
// cant change whole array.

const nayok = {
    name:'sakib khan ',
    phoneNo:'778880099'
}
nayok.cinema="o amr pakhi";
console.log(nayok);
// this will work but you cant change thw variable nayok if you do so thn  it will display error.

let patientName = "Rahim Chacha";
patientName = "fatimaKhala ";
console.log(patientName);

// let is called Scope Variable.

let sum = 0;
for(let  i = 0; i <10; i++){
    sum = sum + i;
}
console.log(i); // can not access i outside of scope cause it has declared with let keyword.