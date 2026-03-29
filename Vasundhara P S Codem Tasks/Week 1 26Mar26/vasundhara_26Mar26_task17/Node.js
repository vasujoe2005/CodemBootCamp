const fs = require('fs');
fs.readFile('text.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    const words = data.toLowerCase().trim().split(/\s+/);
    const uniqueWords = [...new Set(words)];
    fs.writeFile('uniqueWords.txt', uniqueWords.join('\n'), (err) => {
        if (err) {
            console.error("Error writing file:", err);
            return;
        }
        console.log("Unique words extracted successfully!");
    });
});