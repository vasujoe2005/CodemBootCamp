const fs = require('fs');
fs.readFile('sentence.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    } 
    const reversed = data.split('').reverse().join('');
    fs.writeFile('reverse.txt', reversed, (err) => {
        if (err) {
            console.error("Error writing file:", err);
            return;
        }
        console.log("File reversed successfully!");
    });
});