const fs = require('fs');
function saveNote(noteText) {
    fs.appendFile('notes.txt', noteText + '\n', (err) => {
        if (err) {
            console.error("Error saving note:", err);
        }
    });
}
module.exports = saveNote;