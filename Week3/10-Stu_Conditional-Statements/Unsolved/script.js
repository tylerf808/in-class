// Change the values and operators below to test your algorithm meets all conditions
var x = 50;
var expression1 = (x < 25);
var expression2 = (x > 50);

// Write Your JavaScript Code Here
if (expression1 && expression2)
{ //if expression1 AND expression2 are true
    console.log("True ✅ True ✅"); //then  do this
} else if (expression1 && !expression2)
{
    console.log("True ✅ False ❌");
} else if (!expression1 && expression2){
    console.log("False ❌ True ✅");
} else {
    console.log("False ❌ False ❌");
}
