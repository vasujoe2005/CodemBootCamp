const fs = require('fs');
fs.readFile('message.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    const upperText = data.toUpperCase();
    fs.writeFile('uppercase.txt', upperText, (err) => {
        if (err) {
            console.error("Error writing file:", err);
            return;
        }
        console.log("File converted successfully");
    });
});