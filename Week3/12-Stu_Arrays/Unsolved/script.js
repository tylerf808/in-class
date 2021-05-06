// WRITE YOUR CODE HERE
var studentNames = ['Tyler', 'Ryan', 'Carl'];

console.log(studentNames.length);

for(var i = 0; i < studentNames.length; i++){
    console.log(studentNames[i]);
}

studentNames[0] = 'Steve';

if (studentNames[0] !== 'Tyler'){
    console.log("Steve is in class.");
} else {
    console.log("Tyler is in class.");
}