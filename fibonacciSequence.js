function fibs(num) {
    // Handle edge cases
    if (num <= 0) return [];
    if (num === 1) return [0];
    
    // Initialize array with first two numbers
    const result = [0, 1];
    
    // Generate subsequent numbers
    for (let i = 2; i < num; i++) {
        result[i] = result[i-1] + result[i-2];
    }
    
    return result;
}

function fibsRec(num) {
    // Handle edge cases
    if (num <= 0) return [];
    if (num === 1) return [0];
    if (num === 2) return [0, 1];

    // Get previous sequence recursively
    const sequence = fibsRec(num - 1);
    
    // Add next Fibonacci number to sequence
    sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
    
    return sequence;
}

// Output:
const arg = process.argv[2];
const n = parseInt(arg);

if (isNaN(n) || n < 0) {
    console.log('Please provide a valid positive number as argument');
    process.exit(1);
}

console.log('\nFibonacci Sequence Calculator');
console.log('===========================');
console.log(`Input number: ${n}`);
console.log('\nIterative result:');
console.log(fibs(n));
console.log('\nRecursive result:');
console.log(fibsRec(n));