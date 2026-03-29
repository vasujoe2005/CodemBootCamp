const fs = require('fs');
fs.readFile('article.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    const word = "Node.js";
    const matches = data.match(/Node\.js/g);
    const count = matches ? matches.length : 0;
    console.log(`Word "${word}" found ${count} times`);
});