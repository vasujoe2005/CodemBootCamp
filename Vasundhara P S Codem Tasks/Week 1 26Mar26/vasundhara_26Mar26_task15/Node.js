const fs = require('fs');
fs.readFile('important.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    fs.writeFile('important_backup.txt', data, (err) => {
        if (err) {
            console.error("Error creating backup:", err);
            return;
        }
        console.log("Backup created successfully");
    });
});