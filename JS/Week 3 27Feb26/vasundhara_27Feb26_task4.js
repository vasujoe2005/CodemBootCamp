let studentMarks = {
    Harini: 75,
    Santhiya: 48,
    Joe: 62,
    Vasu: 35
};
let passMark = 50;
for (let student in studentMarks) {
    let mark = studentMarks[student];
    let status = mark >= passMark ? "Pass" : "Fail";
    console.log(`Student: ${student}, Mark: ${mark}, Status: ${status}`);
}