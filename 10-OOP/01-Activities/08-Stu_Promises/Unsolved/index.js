// Prompt the user to enter what they are currently doing
const userInput = process.argv[2];
console.log('Current user activity:', userInput);

// If the user does not enter anything, return an error message
if (!userInput) {
    console.error(
        '\nPlease enter your current activity\nUsage: `node index.js <activity>`'
    );
    process.exit();
}

// If the user enters anything other than the word 'coding', set 'studentDistracted' to 'true'
const studentDistracted = userInput !== 'coding';

// TODO: Refactor the following to use promises
const practiceCoding = new Promise((resolve, reject) => {
    if (studentDistracted) {
        reject(new Error("Promise rejected: Error: Coding stopped - Student is distracted"));
    } else {
        resolve('We are coding!');
    }
});

// TODO: Refactor to call 'practiceCoding()' and chain a 'then()' to log "We are coding in promises!" in the console
// TODO: Chain a 'catch()' to log "Promise rejected: " and the error
practiceCoding
    .then(() => console.log("We're coding."))
    .catch((err) => console.log(err))

//practiceCoding(callback, errorCallback);