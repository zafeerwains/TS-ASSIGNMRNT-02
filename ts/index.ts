abstract class Vehicle {
    private _make: string;
    private _model: string;
    private _year: number;
    private _rented: boolean;
    constructor(make: string, model: string, year: number, rented: boolean) {
        this._make = make;
        this._model = model;
        this._year = year;
        this._rented = rented;
    }
    public make(): string {
        return this._make
    }
    public model(): string {
        return this._model
    }
    public year(): number {
        return this._year
    }
    public rented(): boolean {
        return this._rented
    }
    public setRented(rented: boolean): void {
        this._rented = rented
    }
    abstract rentakRate(): number;
    public rent() {
        if (!this._rented) {
            this._rented = true;
            console.log("The vehicle is alvaiable for rent and the value of ranted is cahnged to True")
        }
        else {
            console.log("The vehicle is not alvaiable for rent and is already rented")
        }
    }
    public return() {
        if (this._rented) {
            this._rented = false;
            console.log("The Value is changed to False  ")
        }
        else {
            console.log("The vehicle is  alvaiable for rent and is rented to you")
        }
    }
}
class Car extends Vehicle {
    private _seats: number;
    constructor(make: string, model: string, year: number, rented: boolean, seats: number) {
        super(make, model, year, rented)
        this._seats = seats;
    }
    public rentakRate(): number {
        return 5000;
    }
}
class Truck extends Vehicle {
    private _capacity: number;
    constructor(make: string, model: string, year: number, rented: boolean, capacity: number) {
        super(make, model, year, rented)
        this._capacity = capacity;
    }
    public rentakRate(): number {
        return 10000;
    }
}
class Bike extends Vehicle {
    private _power: number;
    constructor(make: string, model: string, year: number, rented: boolean, power: number) {
        super(make, model, year, rented)
        this._power = power;
    }
    public rentakRate(): number {
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

