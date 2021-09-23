class Student {
    constructor(fname, lname, age) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }
}
// Object creation type1
let student1 = new Student('Abhishek', 'Shigavan', 23);
console.log(student1);

//object creation type2
let stud = {
    fname : 'Abhishek',
    lname : 'Shigavan',
    age : '23'
}

console.log('Object stud : ', stud);

//object creation type3 :- using existing object as prototype
let stud1 = Object.create(stud);
stud1.fname = 'Abc';
stud1.lname = 'Xyz';
stud1.age = '25';

console.log('Copy of stud :', stud1);
