//Global variables to hold player and computers choices
var playersChoice, computersChoice;
var running = true;

//Object to keep track of games
var history = {
    wins: 0,
    ties: 0,
    losses: 0,
    getHistory: function(){
        window.alert("Wins: " + this.wins + "\n" + "Loses: " + this.losses + "\n"
        + "Ties: " + this.ties);
    }
};

//Method to collect players input
function getPlayersChoice(){
    playersChoice = window.prompt("Please enter R, P, or S: ");
}

//Method to generate computers choice
function generateComputerChoice (){
    var ranNum = Math.floor(Math.random() * 3);
    if(ranNum == 0) {
        computersChoice = "R";
    } else if (ranNum == 1) {
        computersChoice = "P";
    } else {
        computersChoice = "S";
    }
}

//Method to determine winner
function compare(){
    if (computersChoice == "R") {
        switch(playersChoice){
            case "R":
                history.ties++;
                window.alert("You tied!");
                break;
            case "P":
                history.wins++;
                window.alert("You won!");
                break;
            default:
                history.losses++;
                window.alert("You lost!");
        } 
    } else if (computersChoice == "P"){
        switch(playersChoice){
            case "R":
                history.losses++;
                window.alert("You lost!");
                break;
            case "P":
                history.ties++;
                window.alert("You tied!");
                break;
            default:
                history.wins++;
                window.alert("You won!");
        }
    } else {
        switch(playersChoice){
            case "R":
                history.wins++;
                window.alert("You won!");
                break;
            case "P":
                history.losses++;
                window.alert("You lost!");
                break;
            default:
                history.ties++;
                window.alert("You tied!");
        }
    }
}

//Function to check if player wants to keep playing
var check = function(){
    running = window.confirm("Would you like to keep playing?");
}

//Loop to run the game
while(running == true){
    getPlayersChoice();
    generateComputerChoice();
    compare();
    history.getHistory();
    check();
}