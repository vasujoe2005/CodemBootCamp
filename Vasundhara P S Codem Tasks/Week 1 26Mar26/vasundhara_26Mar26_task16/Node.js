const fs = require('fs');
fs.readFile('story.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    const lines = data.trim().split(/\r?\n/);
    console.log(`Total Lines: ${lines.length}`);
});