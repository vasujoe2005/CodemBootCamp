const fs = require('fs');
fs.readdir('documents', (err, files) => {
    if (err) {
        console.error("Error reading directory:", err);
        return;
    }
    console.log(`Total Files in documents folder: ${files.length}`);
});