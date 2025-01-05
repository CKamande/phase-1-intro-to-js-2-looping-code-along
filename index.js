// Code your solutions in this file
// Function to log a countdown from a given start number to zero
function countDown(start) {
    for (let i = start; i >= 0; i--) {
        console.log(i);
    }
}

// Example usage
const names = ['Alice', 'Bob', 'Charlie'];
const event = 'birthday';

// Function to generate thank you messages
export function writeCards(names, event) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
        const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        messages.push(message);
    }
    return messages;
}

// Generate thank you messages
const thankYouMessages = writeCards(names, event);
console.log(thankYouMessages);

// Invoke the countdown function
countDown(5);
