var stud_name = 'Abhishek';
console.log(`hello ${stud_name}`);

let f_name = 'Abhi';
console.log(`hello ${f_name}`);

const first_name = 'xyz';
console.log(`hello const ${first_name}`);

{
    let local_name = 'ABC';
    console.log(`Accessing in local scope : hello ${local_name}`);
    const local_const = 'abc';
    console.log(`Accessing in local scope : hello ${local_const}`);

    console.log(`Accessing in local scope : hello ${stud_name}`); 
    console.log(`Accessing in local scope : hello ${f_name}`);
    console.log(`Accessing in local scope : hello const ${first_name}`);   
    
    //assigning new value 
    stud_name = 'QWE';
    f_name = 'PQR';
}

// It will give error as scope of local_name & local_const variable is between {} 
// console.log(`hello ${local_name}`);
// console.log(`hello local const ${local_const}`);

console.log(`hello ${stud_name}`);
console.log(`hello ${f_name}`);

//arrow function
let cube = (num) => {
    cubeOfNum = num * num * num;
    console.log(`cube of ${num} is ${cubeOfNum}`);
}

cube(5);

// student object
let student = {
    f_name : 'Abhishek',
    l_name : 'Shigavan',
    age : '23'
}
// for in loop
for(let key in student) {
    console.log(key,  student[key]);
}

let fruits = ['mango', 'apple', 'orange', 'guava']; 
// for of loop
for(items of fruits) {
	console.log(items + " ");
}