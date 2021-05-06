// TODO: Create a constructor function called 'Developer' that takes in 'name' and 'tech'
function Developer(name, tech) {
    this.name = name;
    this.tech = tech;
    // TODO: Include a method called 'introduction()' that introduces the Developer with their name and favorite tech
    this.introduction = () => {
        console.log(`This developer's name is ${this.name} and their favorite tech is ${this.tech}.`);
    }
}

// TODO: Create a new object using the 'Developer' constructor
const tyler = new Developer("Tyler", "Bitcoin");

// TODO: Call the 'introduction()' method on the new object
tyler.introduction();