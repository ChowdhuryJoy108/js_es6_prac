const friendAges = [12,14,16,13,19];
const localFriendAges = [15,17,18];
const cousinAges = [35,37,28,21];

//without [...] operator
const  allAges = friendAges.concat(localFriendAges).concat([23,24,29]).concat(cousinAges);

console.log(allAges);


// with ... operator 
const allAges2 = [...friendAges, ...localFriendAges,23,24,29,...cousinAges]
console.log(allAges2)


//more

const business = 650;
const minister = 450;
const sochib = 250;

const takaPoisa = [650,450,250];
const maximum = Math.max(...takaPoisa);
console.log(maximum);