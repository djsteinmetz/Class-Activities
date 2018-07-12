
function DigitalPal() {
    this.hungry = false;
    this.sleepy= false;
    this.bored = true;
    this.age = 0;
    this.feed  = function() { 
        if(this.hungry) {
            console.log("That was yummy!");
            this.hungry = false;
            this.sleepy = true;
        } else {
            console.log("No thanks! I'm full.");
        }
    };
    this.isSleepy =  function() {
        if(this.sleepy) {
            console.log("Zzzzzzz");
            this.sleepy = false;
            this.bored = true;
            increaseAge();
        } else {
            console.log("No way! I'm not tired");
        }
    };
    this.play = function() {
        if(this.bored) {
            console.log("Yay! Let's play!");
            this.bored = false;
            this.hungry = true;
        } else {
            console.log("Not right now.  Later?");
        }
    };
    this.increaseAge = function() {
        this.age++
        console.log("Happy birthday to me! I am " + this.age + " years old!");
    }
};
var animals = {};
animals.dog = new DigitalPal();
var animal = process.argv[2];
var method = process.argv[3];
// console.log(dog.arg);
animals[animal][method]();

