const fs = require('fs');
fs.readdir('assets', (err, files) => {
    if (err) {
        console.error("Error reading directory:", err);
        return;
    }
    fs.writeFile('fileList.txt', files.join('\n'), (err) => {
        if (err) {
            console.error("Error writing file:", err);
            return;
        }
        console.log("File list saved successfully!");
    });
});