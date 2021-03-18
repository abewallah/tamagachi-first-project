// ========================================================
// Main Creature Class /PARENT
class Creatures {
  constructor(name, age, Maxhunger, Maxsleep, Maxboredum) {
    this.name = name;
    this.age = age;
    this.Maxhunger = Maxhunger;
    this.Maxsleep = Maxsleep;
    this.Maxboredum = Maxboredum;
  }
}
//==========================================================
//CHILD CLASS
class Newcreature extends Creatures {
  constructor(
    name,
    age,
    Maxhunger,
    Maxsleep,
    Maxboredum,
    hunger,
    sleep,
    boredum
  ) {
    super(name, age, Maxhunger, Maxsleep, Maxboredum);

    this.hunger = hunger;
    this.sleep = sleep;
    this.boredum = boredum;
  }
  //===============================================
  // # Methods for 3 buttons
  feedMe() {
    if (this.hunger >= this.Maxhunger) {
      this.hunger = this.Maxhunger;
    } else if (this.hunger < this.Maxhunger) {
      this.hunger += 4;
    }
  }
  timeToSleep() {
    if (this.sleep >= this.Maxsleep) {
      this.sleep = this.Maxsleep;
    } else if (this.sleep < this.Maxsleep) {
      this.sleep += 10;
    }
  }
  letsPlay() {
    if (this.boredum >= this.Maxboredum) {
      this.boredum = this.Maxboredum;
    } else if (this.boredum < this.Maxboredum) {
      this.boredum += 5;
    }
  }
}

//=================================================
creatureOne = {
  name: 'wingmon',
  age: 1,
  hunger: 30,
  sleep: 100,
  boredum: 100,
  Maxhunger: 100,
  Maxsleep: 100,
  Maxboredum: 100,
};

// creatureTwo = {
//   name: 'Sicko',
//   age: 1,
//   hunger: 10,
//   sleep: 10,
//   boredum: 10,
//   Maxhunger: 10,
//   Maxsleep: 10,
//   Maxboredum: 10,
// };

let firstChoice = new Newcreature(
  creatureOne.name,
  creatureOne.age,
  creatureOne.Maxhunger,
  creatureOne.Maxsleep,
  creatureOne.Maxboredum,
  creatureOne.hunger,
  creatureOne.sleep,
  creatureOne.boredum
);

// let secondChoice = new Newcreature(
//   creatureTwo.name,
//   creatureTwo.age,
//   creatureTwo.Maxhunger,
//   creatureTwo.Maxsleep,
//   creatureTwo.Maxboredum,
//   creatureTwo.hunger,
//   creatureTwo.sleep,
//   creatureTwo.boredum
// );

//================================================
