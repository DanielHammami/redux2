const numbers = [1, 2, 3];

// Adding
const added = [...numbers, 4];
const added = [...numbers.slice(0, index), 4, ...numbers.slice(index)];

// Remove
const removed = numbers.filter((n) => n !== 2);

// Updating
const updated = numbers.map((n) => (n === 2 ? 20 : n));
// log updated => [1, 20, 3]
