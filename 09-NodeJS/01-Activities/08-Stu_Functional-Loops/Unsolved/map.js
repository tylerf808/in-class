const originalArray = [1, 3, 2, 5, 10];

// doubledArray is equal to a new array of numbers multiplied by 2 and returned by map(). map() will use an anonymous function as a condition. 
const doubledArray = originalArray.map(function(data) {
    // The anonymous function returns each number multiplied by 2. The returned result is added to a new array.
    return data * 2;
});

console.log(doubledArray);
console.log(originalArray);


// TODO: Describe how map is working in the example below. What will the value of tripledArray be?
// Makes a new array by multiplying each item by 3
const tripledArray = originalArray.map(data => data * 3);

// TODO: Describe how map is working in the example below. What will the value of oddOrEven be?
// checks each item in the array to see if it is even or odd and then adds the strings "even" or "odd" to the new array.
const oddOrEven = originalArray.map(num => {
    if (num % 2 === 0) {
        return 'even'
    } else {
        return 'odd'
    }
});

console.log(tripledArray);
console.log(oddOrEven);