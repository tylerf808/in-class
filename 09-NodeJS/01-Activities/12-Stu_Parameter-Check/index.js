let inputArgs = process.argv;

if (inputArgs[2] === inputArgs[3]) {
    console.log("true");
    return true;
} else {
    console.log("false");
    return false;
}