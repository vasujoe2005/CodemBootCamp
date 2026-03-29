const fs = require('fs');
fs.readFile('numbers.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    const numbers = data.trim().split('\n').map(num => Number(num));
    const evenNumbers = numbers.filter(num => num % 2 === 0);
    const output = evenNumbers.join('\n');
    fs.writeFile('evenNumbers.txt', output, (err) => {
        if (err) {
            console.error("Error writing file:", err);
            return;
        }
        console.log("Even numbers saved successfully!");
    });
});