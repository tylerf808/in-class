console.log(this); //displays the properties of the window object by default

//Also displays the window object's properties
function helloThis() {
  console.log('Inside this function, this is ' + this);
}

//this refers to the age property. The class has a number property called age and a method that adds ten years to that age.
var child = {
  age: 10,
  ageTenYears: function () {
    console.log(this.age + 10);
  },
};

//this in the investmentGrowth method refers to the investment property. An investor class that has a name property and investment property. The investment property has an
//initial investment property as well as a function to calculate investment growth.
var investor = {
  name: 'Cash Saver',
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function () {
      console.log(this.initialInvestment * 1.15);
    },
  },
};