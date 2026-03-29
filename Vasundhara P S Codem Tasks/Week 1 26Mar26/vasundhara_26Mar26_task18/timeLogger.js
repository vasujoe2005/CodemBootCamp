const fs = require('fs');
function getFormattedTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
function logTime(message) {
    const timestamp = getFormattedTime();
    const logEntry = `${timestamp} - ${message}\n`;
    fs.appendFile('timeLog.txt', logEntry, (err) => {
        if (err) {
            console.error("Error logging time:", err);
        }
    });
}
module.exports = logTime;