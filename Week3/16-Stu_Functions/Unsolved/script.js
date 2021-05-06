// Write Your Code Below
function isEqual(a, b){
    if(a === b){
        console.log("They are equal in type and value.");
    } else if (a == b){
        console.log("They are equal in value.");
    } else {
        console.log("They are not equal.");
    }
};

isEqual(5, 5);
isEqual(5, "5");
isEqual(5, "6");