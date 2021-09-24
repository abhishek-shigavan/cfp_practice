const fs = require('fs');

//new object for adding in JSON file 
const newStudent = {
    fname: "Peter",
    lname: "Parkar",
    state: "U.P"
};

fs.readFile('./student.json', 'utf-8', (err, jsonString) => {
    if (err) {
        console.log(err);
    }
    else {
        try {
            //converting json string to js object
            let student = JSON.parse(jsonString);
            console.log(student);
            //appending new data
            student.push(newStudent);
            const jsonStudent = JSON.stringify(student, null, 2);

            //writing into another file
            fs.writeFile('./updatedStudent.json', jsonStudent, (err) => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log("New data added");
                }
            })
        } catch (err) {
            console.log('error occured', err);
        }
    }
});





