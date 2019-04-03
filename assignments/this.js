/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
Window binding - avoid! `this` isn't pointing at anything specific so it looks to its parent element, the window. which very nearly never does anything good.
* 2. 
Implicit binding - is automatic, it is used for well defined objects to use `this` in their methods . Easy to spot.
* 3. 
New binding - uses a constructor function (original artwork) to create new objects (copies), uses prototypes (stencils) to pass around frequently used methods (pencils/ink/paint)
* 4. 
Explicit binding - uses .apply() to pass in an array as arguments && uses .bind() to save a keyword for use later && uses .call() allows a single method or function to be used by another object.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sup(name){
      return `Sup ${name}?`;
}

console.log(sup("dude"));


// Principle 2

// code example for Implicit Binding
const me = {
      name: "Kayla",
      age: 31,
      food: "cake",
      favorite: function() {
        return `${this.name} loves ${this.food}`;
      }
    }

console.log(me.favorite());

// Principle 3

// code example for New Binding

function Vacation(attributes){
      this.name = attributes.name;
      this.country = attributes.country;
      this.climate = attributes.climate;
      this.cuisine = attributes.cuisine;
      this.feature = attributes.feature;
      console.log(this);
}

Vacation.prototype.perk = function() {
      return `${this.name}, home of the ${this.feature}`;
}

const venice = new Vacation({
      name: "Venice",
      country: "Italy",
      climate: "moderate",
      cuisine: "meatballs",
      feature: "sunken library"
});

console.log(venice.perk());
// Principle 4

// code example for Explicit Binding


var maths = {
  x: 9,
  y: 4,
  getZ: function(){ 
        return this.x + this.y; 
  }
};

// console.log(maths.getZ());

var whatsZ = maths.getZ;
whatsZ(); 

var bindWhatsZ = whatsZ.bind(maths);
console.log(bindWhatsZ());

//BIND IS TRICKY.....



// const thing = {
//       name: "Bill",
//       place: "Capitol Hill",
//       sing: function(){
//             return `I'm just a ${this.name}, yeah I'm only a ${this.name}, and I'm sitting here on ${this.place}`;
//       }
// }


    
    
// const useLater = thing.bind(thing.sing());
// // console.log(thing.sing());
// console.log(useLater);