let cart = {
    customerName: "Vasu Joe",
    items: [
        { name: "Shirt", price: 1200, quantity: 2 },
        { name: "Jeans", price: 2000, quantity: 1 },
        { name: "Shoes", price: 3000, quantity: 1 }
    ]
};
function calculateTotal(cartObj) {
    let total = 0;
    cartObj.items.forEach(item => {
        total += item.price * item.quantity;
    });
    return total;
}
let totalPrice = calculateTotal(cart);
console.log(`Total Price of Cart for ${cart.customerName}: ₹${totalPrice}`);
cart.items[0].quantity = 3;  
let updatedTotal = calculateTotal(cart);
console.log(`Updated Total Price: ₹${updatedTotal}`);