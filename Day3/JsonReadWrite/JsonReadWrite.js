const fileSystem = require('fs');
const JsonToCsv = require('json2csv').parse;
const JsonToXlsx = require('xlsx');

function getJsonObj(inputFile) {
    let stringJson = fileSystem.readFileSync(inputFile);
    let jsonObj = JSON.parse(stringJson);
    return jsonObj;
}

const newStudent = {
    fname: "Peter",
    lname: "Parkar",
    state: "U.P"
};

function updateAndCreateJson(oldFilePath, newData, newFilePath) {
    let jsonObj = getJsonObj(oldFilePath);
    jsonObj.push(newData);
    let jsonInString = JSON.stringify(jsonObj, null, 2);
    fileSystem.writeFileSync(newFilePath, jsonInString)
}

function jsonToCsv(jsonFile, csvFile) {
    let jsonObj = getJsonObj(jsonFile);
    const csvData = JsonToCsv(jsonObj, { fields: ["fname", "lname", "state"] });
    fileSystem.writeFileSync(csvFile, csvData)
}

function jsonToXlsx(jsonFile, xlsxFile) {
    let jsonObj = getJsonObj(jsonFile);
    //creating a workbook
    let workBook = JsonToXlsx.utils.book_new();
    //creting worksheet
    let workSheet = JsonToXlsx.utils.json_to_sheet(jsonObj);
    JsonToXlsx.utils.book_append_sheet(workBook, workSheet, 'Student Data');
    JsonToXlsx.writeFile(workBook, xlsxFile);
}

updateAndCreateJson('./student.json', newStudent, './updatedStudent.json');
jsonToCsv('./student.json', './student.csv');
jsonToXlsx('./student.json', './student.xlsx');