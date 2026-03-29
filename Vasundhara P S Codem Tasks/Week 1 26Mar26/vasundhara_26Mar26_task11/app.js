const fs = require('fs');
const generateNumber = require('./randomNumber');
for (let i = 0; i < 5; i++) {
    const num = generateNumber();

    fs.appendFileSync('randomNumbers.txt', num + '\n');
}
console.log("Random numbers generated and saved!");