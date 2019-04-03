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

// Principle 4

// code example for Explicit Binding