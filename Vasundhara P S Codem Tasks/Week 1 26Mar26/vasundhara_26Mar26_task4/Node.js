const fs = require('fs');
fs.readFile('paragraph.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    const words = data.replace(/[^\w\s]/g, '').trim().split(/\s+/);        
    console.log(`Total Words: ${words.length}`);
});