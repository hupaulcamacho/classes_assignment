// # Class Exercises

// (1 - 6 are the same as on the previous lab, but creating classes using ES6 syntax instead of constructor functions)

// ## Question 1

// a. Write a class called `Person` that has 3 properties: a first name, a last name and a middle name. Create 2 instances of a `Person`. Print one of their first names.

// b. Write a method in `Person` called `fullName` that will return a formatted string of an instance's full name. Call this method on both the instances you created in part a.

class Person {
    constructor(firstName, lastName, middleName) {
        this.firstName = firstName
        this.lastName = lastName
        this.middleName = middleName
    }

    fullName () {
        return `${this.firstName} ${this.middleName} ${this.lastName}`;
    }
}

let hank =  new Person("Hank", "Hill", "Rutherford");
let homer = new Person("Homer", "Simpson", "Jay");

console.log(hank.fullName());
console.log(homer.fullName());

// ## Question 2

// a. Create a class called `Book` that has properties `title`, `author` and `rating`. Create some instances of `Book`.

// b. Add a method to `Book` called `isGood` that returns `true` if its rating is greater than or equal to 7

class Book {
    constructor(title, author, rating) {
        this.title = title
        this.author = author
        this.rating = rating
    }

    isGood() {
        if (this.rating >= 7) {
            return true
        } else {
            return false
        }
    }
}

let harry = new Book("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", 8.5);

let mockBird = new Book("To Kill a Mockingbird", "Harper Lee", 9);

let catcher = new Book("The Catcher in the Rye", "J.D. Salinger", 10);

let twilight = new Book("Twilight", "Stephanie Meyer", 6.5);

console.log(twilight.isGood());
console.log(catcher.isGood());

// ## Question 3

// a. Create a `Dog` class with four properties: `name (string), breed (string), mood (string), and hungry (boolean)`.

// b. Add a method called `playFetch`. It should set the dog's `hungry` property to `true`, set its mood property to `playful`, and log "Ruff!"

// c. Add a method called `feed`. If the dog is hungry, it should set `hungry` to `false` and print "Woof!" If the dog is not hungry, it should log "The dog doesn't look hungry"

// d. Add a method called `toString` that returns a description of the dog:

class Dog {
    constructor(name, breed, mood, hungry) {
        this.name = name;
        this.breed = breed;
        this.mood = mood;
        this.hungry = hungry;
    }

    playFetch() {
        this.hungry = true
        this.mood = 'playful'
        console.log("Ruff!")
    }

    feed() {
        if (this.hungry = true) {
            this.hungry = false
            this.mood = 'playful'
        } else {
            console.log('The dog doesnt look hungry...')
        }
    }

    toString() {
        console.log(`This dog's name is ${this.name}. They are of the ${this.breed} breed. It is currently ${this.mood}`)
    }
}

let clifford = new Dog("Clifford", "giant vizsla", "happy", true);

clifford.toString();

// ## Question 4

// There are three common scales that are used to measure temperature: Celsius, Fahrenheit, and Kelvin:

// C = (F - 32) / 1.8
// F = 1.8 * C + 32
// K = C + 273

// a. Make an object called `freezingPoint` that has three properties: `celsius`, `fahrenheit`, and `kelvin`. Give them all values equal to the freezing point of water.

// b. Make a class called `Celsius` that has one property: `celsius`, and two methods `getFahrenheitTemp`, and `getKelvinTemp`.

// ```js
// let outsideTempt = new Celsius(10.0)
// outsideTempt.celsius //returns 10.0
// outsideTempt.getKelvinTemp() //returns 283.0
// outsideTempt.getFahrenheitTemp() //returns 50.0
// ```
// c. Give `Celsius` a method called `isBelowFreezing` that returns a `Bool` (true if the temperature is below freezing).

let freezingPoint = {
    celsius: 0,
    fahrenheit: 32,
    kelvin: 273.2
}
class Celsius {
    constructor(temperature) {
        this.temperature = temperature
    }

    getFahrenheitTemp() {
        return (temperature * 9) / 5 + 32
    }

    getKelvinTemp() {
        return temperature + 273.15
    }

    isBelowFreezing() {
        if (freezingPoint.celsius > temperature) {
            return
        }
    }
}

// ## Question 5

// a. Create a class called `Movie` that has properties for `name`, `year`, `genre`, `cast`, and `description`. Create an instance of your `Movie`

// b. Create an method inside `Movie` called `blurb` that returns a formatted string describing the movie.

// Ex: "Borat came out in 2006. It was an odd film starring Sacha Baron Cohen as a man named Borat who was visiting America from Kazakhstan."

class Movie {
    constructor(name, year, genre, cast) {
        this.name = name;
        this.year = year;
        this.genre = genre;
        this.cast = cast; 
    }

    blurb() {
        return `${this.name} is an ${this.genre} movie that came out in ${this.year}, starring ${this.cast[0]}, ${this.cast[1]}, and ${this.cast[2]}, detailing the struggle of a teenager adjusting to his new powers`
    }
}

let spiderman = new Movie("Spideman Into the Spiderverse", 2018, "animation",["Shamiek Moore", "Mahershala Ali","Hailee Steinfeld"])

console.log(spiderman.blurb())

// ## Question 6

// Write a constructor Vector that represents a vector in two-dimensional space.
// It takes two number arguments: `x` and `y` parameters, which it should be saved to properties of the same name.

// Give the Vector prototype two methods, `plus` and `minus`, that take another vector as an argument and
// returns a new vector that has the sum or difference of the two vectors’ (the one in `this` and the parameter) x and y values.

// Add a method `getLength` to the prototype that computes the length of the vector ;
// that is, the distance of the point (x, y) from the origin (0, 0).(a^2 + b^2 = c^2)

// [Vectors at mathisfun.com](https://www.mathsisfun.com/algebra/vectors.html)

// ```js
// var v1 = new Vector(1, 2)
// var v2 = new Vector(2, 3)
// console.log(v1.plus(v2));
// // => Vector {x: 3, y: 5}
// console.log(v1.minus(v2));
// // => Vector {x: -1, y: -1}

// var v3 = new Vector(3, 4)
// console.log(v3.getLength());
// // => 5
// ```

class Vector {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    plus(a, b) {
        this.x = this.x + a
        this.y = this.y + b
        return `${this.x}, ${this.y}`
    }

    minus(a, b) {
        this.x = this.x - a
        this.y = this.y - b
        return `${this.x}, ${this.y}`
    }

    static getLength(a, b) {
        let dx = a.x - b.x;
        let dy = a.y - b.y;

        return Math.hypot(dx, dy)
    }
}

let origin = new Vector(0, 0);
let vectorOne = new Vector(11, 14);

console.log(vectorOne.minus(2, 4))
console.log(Vector.getLength(origin, vectorOne));

// ## Question 7

// a. Make a class called `Car` with properties `make` and `model`.  Create an instance of a `Car`

// b. Make a class called `Bike` with properties `gears` and `hasBell`.  Create an instance of `Bike`

// c. Give each class a static method called `numberOfWheels` that returns the number of wheels (2 for bikes, 4 for cars).  Why does it make sense for this to be a static method instead of an instance method?

// class Car {
//     constructor(make, model) {
//         this.make = make
//         this.model = model
//     }

//     static numberOfWheels() {
//         return 4
//     }
// }

// let honda = new Car("civic", "2002")

// class Bike {
//     constructor(gears, hasBell) {
//         this.gears = gears
//         this.hasBell = hasBell
//     }

//     static numberOfWheels() {
//         return 2
//     }
// }

// let schwinn = new Bike("12 gears", true)

// ## Question 8

// a. Make a class called `Vehicle` with properties `color` and `name`.  Give it a method called `makeSound` which logs "WHHOOSSSH" to the console

class Vehicle {
    constructor(color, name) {
        this.color = color;
        this.name = name;
    }

    makeSound() {
        console.log("WHOOSSSH");
    }
}

// b. Modify your `Car` and `Bike` classes from Question 7 to extend the `Vehicle` class.

class Car extends Vehicle {
    constructor(color, name, make, model) {
        super(color, name);
        this.make = make;
        this.model = model;
    }

    static numberOfWheels() {
        return 4
    }
}


class Bike extends Vehicle {
    constructor(color, name, gears, hasBell) {
        super(color, name);
        this.gears = gears;
        this.hasBell = hasBell;
    }

    static numberOfWheels() {
        return 2
    }
}

// c. Create a new `Bike` instance that has a `color` of "green" and `name` "Bikey McBikeface"

let bike = new Bike("green", "Bikey McBikeface", 12, true)
console.log(bike);

// d. Create a new `Car` instance that has a `color` of "red" and `name` "Carry McCarface"

let car = new Car("red", "Carry McCarface", "Honda Civic", "1998")

console.log(car);