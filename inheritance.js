//basic class
//super()
//constructor()
//inheritance
//accessing properties
//passing properties as arguments.

class Parent {
    constructor() {
        this.fatherName = 'Schwerznegger';
    }
}

class Child extends Parent {
    constructor(name) {
        super();
        this.name = name;
    }
    getfullName() {
        return this.name + " " + this.fatherName;
    }
}

const baby = new Child('Arnold')
const baby2 = new Child('Tom');

console.log(baby, baby2);
console.log(baby.getfullName(), baby2.getfullName());
