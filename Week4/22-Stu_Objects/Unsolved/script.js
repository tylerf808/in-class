//WRITE YOUR CODE BELOW
var customerOrder = {
    name: "Latte",
    numSugar: 2,
    isReady: true,
    checkIfReady: function (){
        if (this.isReady == true){
            console.log("Ready for pick-up");
        } else {
            console.log("Still in order queue");
        }
    }
};

customerOrder.checkIfReady();