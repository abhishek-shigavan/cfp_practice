const { bubbleSort, insertionSort, selectionSort, binarySearch } = require('./utility');

let unsortedArray = [45, 23, 67, 12, 34, 09, 89, 55, 79];
console.log('Unsorted Array :');
for (no of unsortedArray) {
    console.log(no);
}

let sortedByBubble = bubbleSort(unsortedArray);
console.log('Sorted Array After Bubble Sort : ');
for(items of sortedByBubble) {
	console.log(items);
}

let sortedByInsertion = insertionSort(unsortedArray);
console.log('Sorted Array After Insertion Sort : ');
for(items of sortedByInsertion) {
	console.log(items);
}

let sortedBySelection = selectionSort(unsortedArray);
console.log('Sorted Array After Selection Sort : ');
for(items of sortedBySelection) {
	console.log(items);
}

console.log('List of Numbers : ',...sortedBySelection);
let searchNo = 79;
let result = binarySearch(sortedBySelection, searchNo);
if(result === false){
    console.log(`${searchNo} is not present in list of numbers`);
}