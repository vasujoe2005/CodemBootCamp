const fs = require('fs');
const fileName = process.argv[2];
if (!fileName) {
    console.log("Please provide a file name");
    return;
}
fs.stat(fileName, (err, stats) => {
    if (err) {
        console.error("Error:", err.message);
        return;
    }
    console.log(`File: ${fileName}, Size: ${stats.size} bytes`);
});