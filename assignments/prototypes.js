/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
function GameObject(attributes) {
  this.createdAt = attributes.createdAt,
  this.name = attributes.name,
  this.dimensions = attributes.dimensions
}

GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game.`
}

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats(charAttr) {
  GameObject.call(this, charAttr);
  this.healthPoints = charAttr.healthPoints
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function () {
  return `${this.name} took damage.`
}

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
function Humanoid(humAttr) {
  CharacterStats.call(this, humAttr);
  this.team = humAttr.team,
  this.weapons = humAttr.weapons,
  this.language = humAttr.language
}
 
Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}`;
}

Humanoid.prototype.annoy = function() {
  return `${this.name} is tone-deaf but still sings to every song.`
}

Humanoid.prototype.taunt = function(prey) {
  return `${this.name} thwarts ${prey.name}'s willpower by bringing in donuts every morning. ${prey.name}'s width increases to ${prey.dimensions.width}!`
}

Humanoid.prototype.pray = function() {
  return `${this.name} offers to pray for you, making your soul cringe.`
}



/* == Villan ==       */
function Villan(vilAttr) {
  Humanoid.call(this, vilAttr);
  this.scheme = vilAttr.scheme
}

Villan.prototype = Object.create(Humanoid.prototype);

Villan.prototype.avoid = function(prey) {
  return `${this.name} hides behind ${this.weapons[2]} instead of creating meaningful boundaries. ${prey.name} must relinquish native culture, customs and cease speaking ${prey.language}.`
}

Villan.prototype.distract = function(prey) {
  return `${this.name} uses ${this.weapons[1]} to distract ${prey.name}. ${prey.name} walks away confused, with ${[prey.healthPoints - 2]} health points.`
}

Villan.prototype.harass = function() {
  return `${this.name} uses ${this.weapons[1]} to marginalize the foreign or female.`
}

Villan.prototype.influence = function () {
  return `${this.name} ${this.scheme[0]} by placing bought allies in powerful positions. `
}

Villan.prototype.disgrace = function () {
  return `${this.name} ${this.scheme[1]} and gets away with it???`
}


/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid --> Villan
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'The Old Words',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'The Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  const karen = new Humanoid ({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      witdh: 4,
      height: 1,
    },
    healthPoints: 8,
    name: 'Karen',
    team: 'Green Bay Packers',
    weapons: [
      'Crucifix',
      'Empty Calories',
    ],
    language: 'Mom'
  })

  const richWhiteNarcissist = new Villan ({
    createdAt: new Date(),
    dimentions: {
      length: 3,
      width: 3,
      height: 3,
    },
    healthPoints : 30,
    name: 'Drumpf',
    team: 'America',
    weapons: [
      'Money',
      'The Best Words',
      'Walls',
    ],
    language: 'American',
    scheme: [
      'Stacks the Deck',
      'Lies and Denies',
    ]
  })


  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!

  console.log(karen.team);
  console.log(karen.greet());
  console.log(karen.annoy());
  console.log(karen.taunt(archer));
  console.log(karen.pray());

  console.log(richWhiteNarcissist.avoid(mage));
  console.log(richWhiteNarcissist.distract(karen));
  console.log(richWhiteNarcissist.harass());
  console.log(richWhiteNarcissist.influence());
  console.log(richWhiteNarcissist.disgrace());