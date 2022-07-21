// basic of class
class Student{
    constructor(sName,sId){
        this.id = sId;
        this.name=sName;
        this.school ="kolimunnesa School";
        //shared property
    }
}

const student1 = new Student('kala',101);
const student2 = new Student('dola',202);

console.log(student1.name, student2["name"]);