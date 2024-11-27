function mergeSort(arr) {
    // Base case
    if (arr.length <= 1) return arr;

    // Split array in half
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // Recursive calls and merge
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare elements and merge
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Add remaining elements
    return result
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
}

// Output:
const args = process.argv.slice(2);

if (args.length === 0) {
    console.log('Please provide numbers to sort, example:');
    console.log('node mergeSort.js 3 2 1 13 8 5 0 1');
    process.exit(1);
}

const numbers = args.map(num => parseInt(num));

if (numbers.some(isNaN)) {
    console.log('Please provide valid numbers only');
    process.exit(1);
}

console.log('\nMerge Sort Algorithm');
console.log('==================');
console.log('Input:', numbers);
console.log('Sorted:', mergeSort(numbers));
