"use strict";
class Greeter {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return "Hello " + this.greeting;
    }
}
let greeter = new Greeter(" na imprezie");
console.log(greeter.greet());
//super() jakaś metoda na super
class Animal {
    constructor(theName) {
        this.name = theName;
    }
    move(distanceInMeters = 0) {
        console.log("moved " + distanceInMeters + " meters");
    }
}
class Rhino extends Animal {
    constructor() {
        super("Rhino");
    }
    getAnimalName() {
        return 'This Animal instance has a name of ${this.name}';
    }
}
class Snake extends Animal {
    constructor(name) {
        super(name); //super to chyba odwłoanie do tego co działo się w podstawowej funkcji 
    }
    move(distanceInMeters = 5) {
        super.move(distanceInMeters);
    }
}
let snake = new Snake("Ekans");
console.log(snake);
console.log(snake.move());
