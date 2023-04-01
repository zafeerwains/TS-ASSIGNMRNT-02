"use strict";
class Vehicle {
    constructor(make, model, year, rented) {
        this._make = make;
        this._model = model;
        this._year = year;
        this._rented = rented;
    }
    make() {
        return this._make;
    }
    model() {
        return this._model;
    }
    year() {
        return this._year;
    }
    rented() {
        return this._rented;
    }
    setRented(rented) {
        this._rented = rented;
    }
    rent() {
        if (!this._rented) {
            this._rented = true;
            console.log("The vehicle is alvaiable for rent and the value of ranted is cahnged to True");
        }
        else {
            console.log("The vehicle is not alvaiable for rent and is already rented");
        }
    }
    return() {
        if (this._rented) {
            this._rented = false;
            console.log("The Value is changed to False  ");
        }
        else {
            console.log("The vehicle is  alvaiable for rent and is rented to you");
        }
    }
}
class Car extends Vehicle {
    constructor(make, model, year, rented, seats) {
        super(make, model, year, rented);
        this._seats = seats;
    }
    rentakRate() {
        return 5000;
    }
}
class Truck extends Vehicle {
    constructor(make, model, year, rented, capacity) {
        super(make, model, year, rented);
        this._capacity = capacity;
    }
    rentakRate() {
        return 10000;
    }
}
class Bike extends Vehicle {
    constructor(make, model, year, rented, power) {
        super(make, model, year, rented);
        this._power = power;
    }
    rentakRate() {
        return 1000;
    }
}
let car = new Car("toyota", "434", 333, false, 5);
console.log(car.rent());
console.log(car.return());
let truck = new Truck("toyota", "434", 333, false, 500);
console.log(truck.rent());
console.log(truck.return());
let bike = new Car("toyota", "434", 333, true, 70);
console.log(bike.rent());
console.log(bike.return());
//# sourceMappingURL=index.js.map