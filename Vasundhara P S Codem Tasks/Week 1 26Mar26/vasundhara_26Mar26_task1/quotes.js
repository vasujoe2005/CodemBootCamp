const quotes = [
    "Success is not final, failure is not fatal.",
    "God is Great!",
    "Honesty is the best policy!",
    "Never Ever Give Up!!",
    "Dont judge a book by its cover!"
];
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}
module.exports = getRandomQuote;