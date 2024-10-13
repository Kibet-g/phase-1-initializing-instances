// Write your code here
// Define the Breakfast class
class Breakfast {
    constructor(food, drink) {
      this.food = food;
      this.drink = drink;
    }
  }
  
  // Define the Lunch class
  class Lunch {
    constructor(salad, soup, drink) {
      this.salad = salad;
      this.soup = soup;
      this.drink = drink;
    }
  }
  
  // Define the Dinner class with a private #dessert field
  class Dinner {
    #dessert; // Declare the private field for dessert
    
    constructor(salad, soup, entree, dessert) {
      this.salad = salad;
      this.soup = soup;
      this.entree = entree;
      this.#dessert = dessert; // Assign to the private field
    }
  
    // Optional getter for dessert if needed
    getDessert() {
      return this.#dessert;
    }
  }
  
  // Export the classes
  module.exports = { Breakfast, Lunch, Dinner };
  