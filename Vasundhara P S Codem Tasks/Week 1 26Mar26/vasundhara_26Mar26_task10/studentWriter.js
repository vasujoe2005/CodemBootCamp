const fs = require('fs');
function saveStudent(name, age) {
    const data = `${name} - ${age}\n`;
    fs.appendFile('students.txt', data, (err) => {
        if (err) {
            console.error("Error saving student:", err);
        }
    });
}
module.exports = saveStudent;