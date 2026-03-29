const fs = require('fs');
fs.readFile('products.json', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    try {
        const products = JSON.parse(data);
        console.log("Product List");
        products.forEach(product => {
            console.log(`${product.name} - $${product.price}`);
        });
    } catch (error) {
        console.error("Invalid JSON format:", error.message);
    }
});