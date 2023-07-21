class Greeter
{
    greeting: string
    constructor (message: string)
    {
        this.greeting = message
    }

    greet()  //by defoult all is public
    {
        return "Hello " + this.greeting
    }
}

let greeter = new Greeter (" na imprezie")

console.log(greeter.greet());

//super() jakaś metoda na super

class Animal
{
    private name: string

    constructor (theName: string)
    {
        this.name = theName
    }
    move(distanceInMeters: number = 0)
    {
        console.log("moved " + distanceInMeters + " meters");
        
    }
}

class Rhino extends Animal
{
    constructor()
    {
        super("Rhino")
    }
    getAnimalName()
    {
        return 'This Animal instance has a name of ${this.name}'; 
    }
}

class Snake extends Animal 
{
    constructor (name: string)
    {
        super(name) //super to chyba odwłoanie do tego co działo się w podstawowej funkcji 
    }

    move (distanceInMeters = 5) //nadpisanie orginalej funkcji 
    {
        super.move(distanceInMeters)
    }
}

let snake= new Snake("Ekans")
console.log(snake);
console.log(snake.move());
