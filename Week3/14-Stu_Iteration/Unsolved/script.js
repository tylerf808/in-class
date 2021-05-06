//WRITE YOUR CODE BELOW
var students = ['Carl', 'Ryan', 'Tyler', 'Eric', 'Joey'];

console.log(students.length);

for (var i = 0; i < students.length; i++){
    console.log("Great to see you, " + students[i] + "!");
}

//Same thing with a while loop
var i = 0;

while (i < students.length){
    console.log("Great to see you, " + students[i] + "!");
    i++;
}