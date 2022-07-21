const firstName = 'Justin';
const lastName = "Timberlake";

//without template literal.
const fullName = firstName + " " + lastName + " is a good artist";


const fullName2 = `${firstName} ${lastName} is a good music artist. he sang ${5+2} song`;
console.log(fullName);
console.log(fullName2);

//multiline using Es6 template literal [``].

const multiLine = "i love you\n"+"i miss you\n "+"i need you\n"; //previous 
console.log(multiLine);


// Es6 features
const multiLine2 = `i love you
i miss you
i need you
no! i do not need you anymore!`; 
console.log(multiLine2);


