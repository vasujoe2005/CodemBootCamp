const fs = require('fs');
const createGreeting = require('./greeting');
fs.readFile('names.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    const names = data.trim().split(/\r?\n/).map(name => name.trim()).filter(name => name !== '');
    const greetings = names.map(name => createGreeting(name));
    fs.writeFile('greetings.txt', greetings.join('\n'), (err) => {
        if (err) {
            console.error("Error writing file:", err);
            return;
        }
        console.log("Greetings generated successfully!");
    });
});