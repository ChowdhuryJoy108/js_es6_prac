//fundamental concept of destructuring 

const person = {
    name:'jack william',
    age:17,
    job:'facebooking',
    gf:'ema watson',
    address:'kochukhet',
    phoneNo:'01781667647',
    friend:[
        'Tom hanks',
        'jack sparrow',
        'leo messi',
        'neymar JR'
    ]
}

const {gf,name,address} = person; //destructing
console.log(gf);

// accessing friend array inside the declared object
const friends = person.friend.map(item =>{
    console.log(item);
})

//array destructuring 

const bestFriends = ['sakib khan','amir khan','armaan khan', 'shahrukh khan', 'solmol khan'];

const [youngFriend,nextFriend,...restFriends] = bestFriends;
console.log(youngFriend,nextFriend,...restFriends);

//more example

const complexObj ={
    name:'abc',
    info:{
        location:'kola bagan',
        leader:'tiger',
    }
}
const { location, leader} = complexObj.info;
console.log(location,leader);