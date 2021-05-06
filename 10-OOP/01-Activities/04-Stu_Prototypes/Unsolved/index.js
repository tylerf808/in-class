// TODO: Add a comment describing what kind of function this is
// This is a constructor function that creates a character object when call with the new keyword
function Character(name, type, age, strength, hitpoints) {
    this.name = name;
    this.type = type;
    this.age = age;
    this.strength = strength;
    this.hitpoints = hitpoints;
}

// TODO: Add a comment describing the purpose of `.prototype` in this method declaration
// Adds a printStats method to all instances of the Character class. The method prints out all the properties of the obj.
Character.prototype.printStats = function() {
    console.log(
        `Name: ${this.name}\nProfession: ${this.type}\nAge: ${this.age}\nStrength: ${this.strength}\nHitPoints: ${this.hitpoints}`
    );
    console.log('\n-------------\n');
};

// TODO: Add a comment describing the functionality of this method
// The method checks the hitpoint property of a character object and prints out name + still alive and if greater than 0 or
// name + has died in any other case
Character.prototype.isAlive = function() {
    if (this.hitpoints > 0) {
        console.log(`${this.name} is still alive!`);
        console.log('\n-------------\n');
        return true;
    }
    console.log(`${this.name} has died!`);
    return false;
};

// TODO: Add a comment describing the functionality of this method
// Takes another character object as a parameter and subtracts hitpoints from that target character equal to the strength
// property of the character object that called the method.
Character.prototype.attack = function(character2) {
    character2.hitpoints -= this.strength;
};

// TODO: Add a comment describing the functionality of this method
// Increases the age. strength, and hitpoints properties of the object that calls the method.
Character.prototype.levelUp = function() {
    this.age += 1;
    this.strength += 5;
    this.hitpoints += 25;
};

const warrior = new Character('Crusher', 'Warrior', 25, 10, 75);
const rogue = new Character('Dodger', 'Rogue', 23, 20, 50);

warrior.printStats();
rogue.printStats();

rogue.attack(warrior);

// TODO: Add a comment describing what you expect to see printed in the console
// All the properties of the warrior object
warrior.printStats();

// TODO: Add a comment describing what you expect to see printed in the console
// It'll print crusher is still alive cause the warrior obj still has hitpoints left after the rogue obj's attack.
warrior.isAlive();

rogue.levelUp();

// TODO: Add a comment describing what you expect to see printed in the console
// Will print the rouge's obj properties. The age, strength and hitpoints properties should increase.
rogue.printStats();